import json
import requests
import io
import os
import base64
import random
import shutil

from PIL import Image, PngImagePlugin

def getName(speciesName):
    return random.choice(open('./names/{}names.txt'.format(speciesName)).readlines())

def ordinal(n: int):
    if 11 <= (n % 100) <= 13:
        suffix = 'th'
    else:
        suffix = ['th', 'st', 'nd', 'rd', 'th'][min(n % 10, 4)]
    return str(n) + suffix

url = "https://1a28be5f5eef89b397.gradio.live"

species = ["cat", "dog", "llama", "goat", "rabbit", "fox", "sheep"]
usedNames = []

total = 100

shutil.rmtree('./out')
os.mkdir('./out')
os.mkdir('./out/images')
os.mkdir('./out/json')

for curr in range(total):
    try:
        prompt = ["arcane style"]
        curr_species = random.choice(species)
        curr_name = getName(curr_species)
        while (curr_name in usedNames):
            curr_name = getName(curr_species)
        usedNames.append(curr_name)
        curr_name = curr_name.replace("\n", "")

        meta = {
            "name": curr_name,
            "description": f'Meet **{curr_name}**, the **{ordinal(curr+1)}** member of stray shelters.',
            "image": "ipfs:[CID]/[id]",
            "attributes": [
                {
                    "trait_type": "Species",
                    "value": curr_species
                },
            ]
        }

        print(f"generating {curr_species} named {curr_name}")
        prompt.extend([curr_species, "staring at me portrait"])
        payload = {
            "prompt": " ".join(prompt),
            "negative_prompt": "human, blurry, man, woman, boy, girl",
            "steps": 20,
        }
        response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=payload)
        r = response.json()
        
        for i in r['images']:
            image = Image.open(io.BytesIO(base64.b64decode(i.split(",",1)[0])))

            png_payload = {
                "image": "data:image/png;base64," + i
            }
            response2 = requests.post(url=f'{url}/sdapi/v1/png-info', json=png_payload)

            pnginfo = PngImagePlugin.PngInfo()
            pnginfo.add_text("parameters", response2.json().get("info"))
            image.save(f'out/images/{curr}.png', pnginfo=pnginfo)
    
            json_metadata = json.dumps(meta, indent=4)
            with open(f'out/json/{curr}.json', "w") as outfile:
                outfile.write(json_metadata)

            print(f"generated {curr_species} named {curr_name}")
    except:
        curr-=1
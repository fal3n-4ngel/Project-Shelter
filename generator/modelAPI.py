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

url = "https://d2cbeeecd0c82ce969.gradio.live"

species = ["cat", "dog", "llama", "goat", "cock", "kingfisher", "lizard", "eagle", "swan", "rabbit", "fox", "sheep"]
usedNames = []

total = 10

shutil.rmtree('./out')
os.mkdir('./out')
os.mkdir('./out/images')

for curr in range(total):
    prompt = ["arcane style"]
    curr_species = random.choice(species)
    curr_name = getName(curr_species)
    while (curr_name in usedNames):
        curr_name = getName(curr_species)
    usedNames.append(curr_name)

    meta = {
        "name": curr_name,
        "description": "",
        "image": "ipfs:[CID]",
        "attributes": [
            {
                "trait_type": "Species",
                "value": curr_species
            }
        ]
    }

    print("generating {} named {}".format(curr_species, curr_name))
    prompt.extend([curr_species, "staring at me portrait"])
    payload = {
        "prompt": " ".join(prompt),
        "negative_prompt": "human, blurry",
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
        image.save('out/images/{}.png'.format(curr), pnginfo=pnginfo)
        print("generated {} named {}".format(curr_species, curr_name))
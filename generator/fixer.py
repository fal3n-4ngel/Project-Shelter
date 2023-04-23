import os, json

def ordinal(n: int):
    if 11 <= (n % 100) <= 13:
        suffix = 'th'
    else:
        suffix = ['th', 'st', 'nd', 'rd', 'th'][min(n % 10, 4)]
    return str(n) + suffix

folder = "./out/images"
cnt = 0
for count, filename in enumerate(os.listdir(folder)):
    dst = f"{str(cnt)}.png"
    cnt+=1
    src =f"{folder}/{filename}"  # foldername/filename, if .py file is outside folder
    dst =f"./out/test-images/{dst}"
    os.rename(src, dst)
    
folder = "./out/json"
cnt = 0
path = './out/test-json'
for count, filename in enumerate(os.listdir(folder)):
    dst = f"{str(cnt)}"
    src =f"{folder}/{filename}"  # foldername/filename, if .py file is outside folder
    dst =f"./out/test-json/{dst}"
    os.rename(src, dst)
    with open(dst,"r+") as json_file:
        json_file.seek(0)   
        data = json.load(json_file)
        name = data["name"]
        data["description"] = f'Meet **{name}**, the **{ordinal(cnt+1)}** member of stray shelters.'
        cnt+=1
        json_file.seek(0)        
        json.dump(data, json_file, indent=4)
        json_file.truncate()


    

import os, json

path = './out/json'
cidstr="ipfs://QmPgp96q8qQzarMbpbs23zxHAjp7pqnHw9A43n8DKPeY5R/"
names = [filename for filename in os.listdir(path) if filename.endswith('.json')]

for fname in names:
    with open(os.path.join(path, fname),"r+") as json_file:
        json_file.seek(0)   
        data = json.load(json_file)
        endname=data["image"]
        data["image"] = cidstr+fname.replace("json", "png")
        json_file.seek(0)        
        json.dump(data, json_file, indent=4)
        json_file.truncate()
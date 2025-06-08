import requests
import subprocess

#class GenerateAudio:
    #def __init__(self, api_key):
        #self.api_key = api_key
api_key="2c2530918c3883e8bd4e8b93e29f8b63"
def generate( text,voice="2EiwWnXFnvU5JabPnv8n"):
        CHUNK_SIZE = 1024
        url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice}"

        headers = {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": api_key
        }

        data = {
            "text": text,
            "model_id": "eleven_monolingual_v1",
            "voice_settings": {
                "stability": 0.5,
                "similarity_boost": 0.5
            }
        }

        response = requests.post(url, json=data, headers=headers)

        with open('output.mp3', 'wb') as f:
            for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
                if chunk:
                    f.write(chunk)
                    

        subprocess.Popen(['ffplay', '-nodisp', '-autoexit', 'output.mp3'], stdin=subprocess.PIPE)
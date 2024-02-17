import requests
import json

url = 'https://chatbot.theb.ai/api/chat-process'
id = None
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/json',
    'Origin': 'https://chatbot.theb.ai',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Referer': 'https://chatbot.theb.ai/',
    'Cookie': '__cf_bm=czcZYsyJ.QLqU50NT1AN3QkBYQKiEpzsHQKwzKasg04-1690801362-0-ATCT3f6rRR3TzUNPqbapq/7+sic/H0UjBtTbMZN+ILvCWat7uYUx4TiacOMquXkSzUVRobiW+/mAPbEbdF0wBwQ=; cf_clearance=hbD1jkZrBpXO9BofNmW6sYCzdcwQ2fFyScZsc0wRFqQ-1690801362-0-0.2.1690801362',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'TE': 'trailers'
}
while True:
    data = {
        'prompt': input('\n prompt: '),
        'options': {"parentMessageId":id}
    }
    with requests.Session() as session:
        response = session.post(url, headers=headers, data=json.dumps(data))
        json_response = json.loads(response.text.splitlines()[-1])
        id = json_response["detail"]["id"]

    print(json_response["text"])

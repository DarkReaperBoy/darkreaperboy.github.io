import requests, bs4

response = requests.get("https://irarz.com/").text
soup = bs4.BeautifulSoup(response, "html.parser")

def persian_to_english(persian_number):
    persian_to_english_map = {
        '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4',
        '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9'
    }
    
    english_number = ''
    for char in persian_number:
        if char in persian_to_english_map:
            english_number += persian_to_english_map[char]
        else:
            english_number += char
    
    return english_number

persian_number = soup.select("#dollar_tavafogh")[0].text
english_number = persian_to_english(persian_number)

print(f"Today's dollar is {english_number}")

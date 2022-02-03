from numpy import save
import requests, os
from bs4 import BeautifulSoup

def save_images(keyword, images):
    os.makedirs(f'./{keyword}', exist_ok=True)
    for image in images:
        with open(f'./{keyword}/{image.get("src").split("/")[-1]}', 'wb') as f:
            f.write(requests.get('http:' + image.get("src")).content)

def steal(keyword):
    url = f'https://en.wikipedia.org/wiki/{keyword}'
    page = requests.get(url)
    if page.status_code != 200:
        return 'Couldn\'t find the page'
    soup = BeautifulSoup(page.content, 'html.parser')
    images = soup.find_all('img')
    save_images(keyword, images)

steal('dog')
import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_page(genre) -> pd.DataFrame:
    url = f'https://www.goodreads.com/shelf/show/{genre.lower()}'
    webpage_source = requests.get(url).text
    content = BeautifulSoup(webpage_source, 'html.parser')
    link_prefix = 'https://www.goodreads.com'
    data = []
    for book in content.find('div', 'leftContainer').find_all('div', 'elementList'):
        title = book.find('a', 'bookTitle').text.strip()
        author = book.find('a', 'authorName').text.strip()
        link = link_prefix + book.find('a', 'bookTitle')['href']
        image = book.find('img')
        image_src = image['src']
        image_alt = image['alt']
        data.append([title, author, link, image_src, image_alt])
    df = pd.DataFrame(data, columns=['title', 'author', 'link', 'img_src', 'img_alt'])
    return df

def get_books(genres):
    # Retrieve books for all genres then merge each progressively
    # TODO optimise merge
    base_genre = scrape_page(genres[0].rstrip())
    i = 1
    while i < len(genres):
        genre_df = scrape_page(genres[i])
        base_genre = base_genre[base_genre['title'].isin(genre_df['title'])]
        i += 1
    return base_genre.to_json(orient='records')

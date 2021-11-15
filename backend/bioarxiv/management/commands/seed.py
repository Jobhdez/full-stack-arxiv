import requests
from django.core.management.base import BaseCommand
from ...models import Paper

def get_papers():
    url =  'https://api.biorxiv.org/details/biorxiv/2018-08-21/2018-08-28/45'
    response = requests.get(url)
    papers_in_json = response.json()
    return papers_in_json['collection']

def seed_papers():
    for i in get_papers():
        paper = Paper(title=i["title"],
                      author=i['authors'],
                      date=i["date"],
                      category=i["category"],
                      abstract=i["abstract"],
                      )
        paper.save()

class Command(BaseCommand):
    def handle(self, *args, **options):
        seed_papers()
        print("completed")


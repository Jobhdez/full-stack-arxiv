from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, \
    PageNotAnInteger
from .models import Paper

def paper_list(request):
    object_list = Paper.objects.all()
    paginator = Paginator(object_list, 3) # 3 abstracts/page
    page = request.GET.get('page')
    try:
        papers = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer deliver the first page
        papers = paginator.page(1)
    except EmptyPage:
        # If page is out of range deliver last page of results
        papers = paginator.page(paginator.num_pages)
    return render(request,
                  'bioarxiv/paper/list.html',
                  {'page': page,
                   'papers': papers})

from django.shortcuts import render

from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Produit, Commentaire
from .serializers import ProduitSerializer
from produits import serializers
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
import json
from .utils import getListProduit, getDetailProduit,updateProduit, deleteProduit, creerCommentaire

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/produits/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of product'
        },
        {
            'Endpoint': '/produits/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single produits object'
        },
        {
            'Endpoint': '/produits/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new produits with data sent in post request'
        },
        {
            'Endpoint': '/produits/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing produits with data sent in post request'
        },
        {
            'Endpoint': '/produits/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting produits'
        },
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def getProduits(request):
    
    if request.method == 'GET':
        return getListProduit(request)
    
    if request.method == 'POST':
        return creerCommentaire(request)
    
@api_view(['GET', 'PUT', 'DELETE'])
def getProduit(request, pk):
    if request.method == 'GET':
        return getDetailProduit(request, pk)

    if request.method == 'PUT':
        return updateProduit(request, pk)

    if request.method == 'DELETE':
        return deleteProduit(request, pk)
    

# def recherche(request):
#     resultats = Produit.objects.filter(nom_prod__icontains=request.GET.get('q', ''))
#     data = [{'nom_prod': obj.nom_prod, 'titre_prod': obj.titre_prod } for obj in resultats]    
#     return JsonResponse(data, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class ItemCreateView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        name = data.get('message', '')
        
        if name:
            comment = Commentaire.objects.create(message=name)
            return JsonResponse({'id': new_comment.id, 'message': comment.name})
        else:
            return JsonResponse({'error': 'Name is required'}, status=400)
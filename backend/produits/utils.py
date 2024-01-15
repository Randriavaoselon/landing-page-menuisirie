from rest_framework.response import Response
from rest_framework import status
from .models import Produit
from produits.models import Commentaire
from .serializers import ProduitSerializer, CommentaireSerializer

def getListProduit(request):
    produit = Produit.objects.all().order_by('nom_prod')
    serializer = ProduitSerializer(produit, many=True)
    return Response(serializer.data)

def getDetailProduit(request, pk):
    produit = Produit.objects.get(id=pk)
    serializer = ProduitSerializer(produit, many=False)
    return Response(serializer.data)

def creerCommentaire(request):
    if request.method == 'POST':
        data = Commentaire.objects.all()
        serializer = CommentaireSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
      
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  

def updateProduit(request, pk):
    data = request.data
    produit = Produit.objects.get(id=pk)
    serializer = ProduitSerializer(instance=produit, data=data)
    
    if serializer.is_valid():
        serializer.save()
        
    return serializer.data

def deleteProduit(request, pk):
    produit = Produit.objects.get(id=pk)
    produit.delete()
    return Response('Le produit a été supprimer avec success')

# def searchProduit(self, *args, **kwargs):
#     queryset = Produit.objects.all()
#     serializer = ProduitSerializer(queryset, many=True)
    
#     qs = super().get_queryset(*args, **kwargs)
#     request = self.request
#     nom_produit = request.query_params.get("nom_prod")
#     if nom_produit == "noBody":
#         return qs.none()
#     return qs.filter(nom_prod__incontains=nom_produit)[:5]
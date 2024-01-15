from rest_framework.serializers import ModelSerializer
from .models import Produit, Commentaire

class ProduitSerializer(ModelSerializer):
    class Meta:
        model = Produit
        fields = '__all__'
        
class CommentaireSerializer(ModelSerializer):
    class Meta:
        model = Commentaire
        fields = ('id', 'message')        
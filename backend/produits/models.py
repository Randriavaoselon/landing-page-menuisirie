from django.db import models

# Create your models here.
class Produit(models.Model):
    nom_prod = models.CharField(max_length=100, null=True)
    titre_prod = models.CharField(max_length=200, null=True)
    description_prod = models.TextField(null=True)
    prix_prod = models.IntegerField(null=True)
    image = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return self.nom_prod
    
class Commentaire(models.Model):
    message = models.TextField(null=False, blank=False)
    
    def __str__(self):
        return str(self.message)
        
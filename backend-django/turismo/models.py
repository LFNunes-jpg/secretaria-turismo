from django.db import models

class EventoTuristico(models.Model):
    CATEGORIAS = [
        ('Parque', 'Parque'),
        ('Arte', 'Arte'),
        ('Feira', 'Feira'),
        ('Cultura', 'Cultura'),
        ('Outro', 'Outro'),
    ]

    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    local = models.CharField(max_length=100)
    data = models.DateField()
    horario = models.TimeField()
    categoria = models.CharField(max_length=20, choices=CATEGORIAS)
    imagem = models.URLField(blank=True)

    def __str__(self):
        return f"{self.nome} ({self.categoria})"

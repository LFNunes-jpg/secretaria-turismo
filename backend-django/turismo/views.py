from django.http import JsonResponse

def api_root(request):
    return JsonResponse({'mensagem': 'API de Turismo funcionando!'})

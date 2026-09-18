import math


class Circulo:
    def __init__(self, radio):
        self.radio = radio
        self.area = 0
        self.longitud = 0

    def obtener_medidas(self):
        self.area = math.pi * self.radio ** 2
        self.longitud=2 * math.pi * self.radio

    def mostrar_datos(self):
        print("Área del círculo:", self.area)
        print("Longitud de la circunferencia:", self.longitud)


radio = float(input("Ingrese el radio del círculo: "))
circulo= Circulo(radio)
circulo.obtener_medidas()
circulo.mostrar_datos()

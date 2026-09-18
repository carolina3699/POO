class Potencias:
    def __init__(self, numero):
        self.numero = numero
        self.cuadrado = 0
        self.cubo = 0

    def calcular(self):
        self.cuadrado=self.numero ** 2
        self.cubo = self.numero**3

    def mostrar(self):
        print(f"El cuadrado es: {self.cuadrado}")
        print(f"El cubo es: {self.cubo}")


numero = float(input("Ingrese un número: "))
operacion = Potencias(numero)
operacion.calcular()
operacion.mostrar()

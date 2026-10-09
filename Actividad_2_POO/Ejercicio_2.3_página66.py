from enum import Enum

class TipoCombustible(Enum):
    GASOLINA = 1; BIOETANOL = 2; DIESEL = 3; BIODISEL = 4; GAS_NATURAL = 5

class TipoAutomovil(Enum):
    CIUDAD = 1; SUBCOMPACTO = 2; COMPACTO = 3; FAMILIAR = 4; EJECUTIVO = 5; SUV = 6

class TipoColor(Enum):
    BLANCO = 1; NEGRO = 2; ROJO = 3; NARANJA = 4; AMARILLO = 5; VERDE = 6; AZUL = 7

class Automovil:
    def __init__(self, marca, modelo, motor, combustible, tipo, puertas, asientos, velocidad_max, color):
        self.marca = marca
        self.modelo = modelo
        self.motor = motor
        self.tipo_combustible = combustible
        self.tipo_automovil = tipo
        self.puertas = puertas
        self.asientos = asientos
        self.velocidad_maxima = velocidad_max
        self.color = color
        self.velocidad_actual = 0

    def acelerar(self, incremento):
        if self.velocidad_actual + incremento <= self.velocidad_maxima:
            self.velocidad_actual += incremento
        else:
            print("No se puede superar la velocidad máxima.")

    def desacelerar(self, decremento):
        if self.velocidad_actual - decremento >= 0:
            self.velocidad_actual -= decremento
          
        else:
            print("La velocidad no puede ser negativa.")

    def frenar(self):
        self.velocidad_actual = 0

    def imprimir(self):
        print("Marca =", self.marca)
        print("Modelo =", self.modelo)
        print("Velocidad actual =", self.velocidad_actual)



if __name__ == "__main__":
    auto1 = Automovil("Ford", 2018, 3, TipoCombustible.DIESEL, TipoAutomovil.EJECUTIVO, 5, 6, 250, TipoColor.NEGRO)
    auto1.imprimir()
    auto1.acelerar(50)
    print("Nueva velocidad:", auto1.velocidad_actual)

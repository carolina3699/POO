import math



class Circulo:
    def __init__(self, radio): self.radio = radio
    def calcular_area(self): return math.pi * (self.radio ** 2)
    def calcular_perimetro(self): return 2 * math.pi * self.radio

class Rectangulo:
    def __init__(self, base, altura): self.base = base; self.altura = altura
    def calcular_area(self): return self.base * self.altura
    def calcular_perimetro(self): return (2 * self.base) + (2 * self.altura)

class Cuadrado:
    def __init__(self, lado): self.lado = lado
    def calcular_area(self): return self.lado * self.lado
    def calcular_perimetro(self): return 4 * self.lado

class TrianguloRectangulo:
    def __init__(self, base, altura): self.base = base; self.altura = altura
    def calcular_area(self): return (self.base * self.altura) / 2
    def calcular_hipotenusa(self): return math.hypot(self.base, self.altura)
    def calcular_perimetro(self): return self.base + self.altura + self.calcular_hipotenusa()




if __name__ == "__main__":
    c = Circulo(5)
    print("Área Círculo:", round(c.calcular_area(), 2))
    r = Rectangulo(3, 4)
    print("Área Rectángulo:", r.calcular_area())

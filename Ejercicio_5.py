class SeguimientoAlgoritmo:
    def __init__(self):
        self.suma = 0.0
        self.x = 0.0
        self.y = 0.0

    def ejecutar_pasos(self) -> float:
        self.suma = 0
        self.x = 20
        self.suma = self.suma + self.x
        self.y = 40
        self.x = self.x + (self.y ** 2)
        self.suma = self.suma + (self.x / self.y)
        return self.suma

if __name__ == "__main__":
    proceso = SeguimientoAlgoritmo()
    resultado = proceso.ejecutar_pasos()
    print(f"EL VALOR DE LA SUMA ES: {resultado}")

class CalculadoraEdades:
    def __init__(self, edad_juan: float):
        self.edad_juan = edad_juan

    def calcular_edad_alberto(self) -> float:
        return (2 / 3) * self.edad_juan

    def calcular_edad_ana(self) -> float:
        return (4 / 3) * self.edad_juan

    def calcular_edad_mama(self) -> float:
        return self.edad_juan + self.calcular_edad_alberto() + self.calcular_edad_ana()

    def obtener_resumen(self) -> dict:
        return {
            "Juan": self.edad_juan,
            "Alberto": round(self.calcular_edad_alberto(), 2),
            "Ana": round(self.calcular_edad_ana(), 2),
            "Mamá": round(self.calcular_edad_mama(), 2)
        }

if __name__ == "__main__":
    edad_j = float(input("Ingrese la edad de Juan: "))
    familia = CalculadoraEdades(edad_j)
    resumen = familia.obtener_resumen()
    
    print("\n--- Resultados Edades ---")
    for persona, edad in resumen.items():
        print(f"Edad de {persona}: {edad} años")

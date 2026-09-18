class Empleado:
    def __init__(self):
        self.horas_trabajadas = 48
        self.valor_hora = 5000
        self.porcentaje_retencion = 12.5
        self.salario_bruto = 0
        self.retencion = 0
        self.salario_neto = 0

    def calcular_pago(self):
        self.salario_bruto = self.horas_trabajadas * self.valor_hora
        self.retencion = self.salario_bruto * self.porcentaje_retencion / 100
        self.salario_neto = self.salario_bruto - self.retencion

    def mostrar_resultados(self):
        print("Salario bruto:", self.salario_bruto)
        print("Retención en la fuente:", self.retencion)
        print("Salario neto:", self.salario_neto)


empleada = Empleado()
empleada.calcular_pago()
empleada.mostrar_resultados()

from enum import Enum

class TipoCuenta(Enum):
    AHORROS = 1
    CORRIENTE = 2



class CuentaBancaria:
    def __init__(self, nombres, apellidos, numero, tipo):
        self.nombres_titular = nombres
        self.apellidos_titular = apellidos
        self.numero_cuenta = numero
        self.tipo_cuenta = tipo
        self.saldo = 0.0

    def imprimir(self):
        print("Titular:", self.nombres_titular, self.apellidos_titular)
        print("Número de cuenta:", self.numero_cuenta)
        print("Saldo actual:", self.saldo)

    def consignar(self, valor):
        if valor > 0:
            self.saldo += valor
            print("Se consignó:", valor)
        else:
            print("Valor inválido")

    def retirar(self, valor):
        if 0 < valor <= self.saldo:
            self.saldo -= valor
            print("Se retiró:", valor)
        else:
            print("Fondos insuficientes o valor inválido")



if __name__ == "__main__":
    cta = CuentaBancaria("Pedro", "Pérez", 123456, TipoCuenta.AHORROS)
    cta.consignar(500000)
    cta.retirar(150000)
    cta.imprimir()

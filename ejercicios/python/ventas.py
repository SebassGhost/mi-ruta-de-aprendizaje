
ventas = [120, 50, 300, 80, 450, 200, 30]

suma = 0
ventaMayores = 0
ventaMenores = 0
ventaAlta = ventas[0]

for venta in ventas:
    if(venta >= 200):
        ventaMayores = ventaMayores + 1
    elif(venta < 200 ):
        ventaMenores = ventaMenores + 1
        
    if(venta  >= ventaAlta):
        ventaAlta = venta
        
    suma = suma + venta

print("ventas mayores:", ventaMayores)
print("ventas menores:", ventaMenores)
print("venta mas alta:", ventaAlta)
print("suma de todas las ventas:", suma)
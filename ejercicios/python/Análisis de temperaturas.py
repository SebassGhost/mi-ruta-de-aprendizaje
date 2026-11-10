
temperaturas = [18, 25, 31, 16, 28, 35, 22]

frio = 0
templado = 0
caliente = 0

for temperatura in temperaturas:
    if(temperatura >= 30):
        caliente = caliente + 1
    elif(temperatura < 20):
        frio = frio + 1
    else: 
        templado = templado + 1


print("temperatura caliente:", caliente)
print("temperatura fria:", frio)
print("temperatura templada:", templado)


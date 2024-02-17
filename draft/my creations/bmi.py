height = float(input("what is your height? \n")) ** 2
weight = int(input("what is your weight? \n"))
BMI = weight / height

if BMI < 10.5:
    print(f"your bmi is {BMI}, and you are underweight (dying)")
elif BMI < 25 and BMI > 10.5:
    print(f"your bmi is {BMI}, and it's fine")
elif BMI < 30 and BMI > 25:
    print(f"your bmi is {BMI}, and you are overweight, you fat fuck")
else:
    print(f"you bmi is {BMI}, die")

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mealPlannerForm")
    const resultDiv = document.getElementById("result")
  
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const result = generateMealPlan(formData)
      displayResult(result)
    })
  
    function calculateBMI(weight, height) {
      return Number((weight / (height * height)).toFixed(2))
    }
  
    function getBMICategory(bmi) {
      if (bmi < 18.5) return "Underweight"
      if (bmi >= 18.5 && bmi < 24.9) return "Normal weight"
      if (bmi >= 25 && bmi < 29.9) return "Overweight"
      return "Obesity"
    }
  
    function getMealPlan(healthGoal, dietaryPreference) {
      const mealPlans = {
        "Weight Loss": {
          Vegetarian: [
            "Breakfast: Oats with almond milk and fresh fruits",
            "Lunch: Grilled vegetable salad with quinoa",
            "Dinner: Lentil soup with steamed broccoli",
          ],
          Vegan: [
            "Breakfast: Smoothie with spinach, banana, and plant-based protein",
            "Lunch: Chickpea and avocado wrap",
            "Dinner: Stir-fried tofu with mixed vegetables",
          ],
          "Non-Vegetarian": [
            "Breakfast: Boiled eggs with whole-grain toast",
            "Lunch: Grilled chicken salad",
            "Dinner: Baked salmon with asparagus",
          ],
        },
        "Muscle Gain": {
          Vegetarian: [
            "Breakfast: Greek yogurt with nuts and honey",
            "Lunch: Paneer (cottage cheese) with brown rice and vegetables",
            "Dinner: Lentil curry with whole-grain bread",
          ],
          Vegan: [
            "Breakfast: Smoothie with peanut butter, banana, and oat milk",
            "Lunch: Quinoa and black bean bowl",
            "Dinner: Tempeh stir-fry with sweet potatoes",
          ],
          "Non-Vegetarian": [
            "Breakfast: Scrambled eggs with turkey bacon",
            "Lunch: Grilled chicken with sweet potatoes",
            "Dinner: Steak with roasted vegetables",
          ],
        },
        Maintenance: {
          Vegetarian: [
            "Breakfast: Whole-grain cereal with milk and berries",
            "Lunch: Vegetable pasta with cheese",
            "Dinner: Veggie burger with a side salad",
          ],
          Vegan: [
            "Breakfast: Avocado toast with chia seeds",
            "Lunch: Lentil and spinach curry with rice",
            "Dinner: Buddha bowl with roasted vegetables and hummus",
          ],
          "Non-Vegetarian": [
            "Breakfast: Omelet with veggies",
            "Lunch: Grilled chicken sandwich",
            "Dinner: Roasted turkey with mashed potatoes",
          ],
        },
      }
  
      return mealPlans[healthGoal][dietaryPreference]
    }
  
    function generateMealPlan(formData) {
      const name = formData.get("name")
      const age = Number(formData.get("age"))
      const weight = Number(formData.get("weight"))
      const height = Number(formData.get("height"))
      const healthGoal = formData.get("healthGoal")
      const dietaryPreference = formData.get("dietaryPreference")
  
      const bmi = calculateBMI(weight, height)
      const bmiCategory = getBMICategory(bmi)
      const mealPlan = getMealPlan(healthGoal, dietaryPreference)
  
      return {
        name,
        bmi,
        bmiCategory,
        mealPlan,
      }
    }
  
    function displayResult(result) {
      resultDiv.innerHTML = `
              <h3>Results for ${result.name}</h3>
              <p><strong>BMI:</strong> ${result.bmi} (${result.bmiCategory})</p>
              <p><strong>Meal Plan:</strong></p>
              <ul>
                  ${result.mealPlan.map((meal) => `<li>${meal}</li>`).join("")}
              </ul>
          `
      resultDiv.classList.remove("hidden")
    }
  })
  

  function submitfunction(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const result = generateMealPlan(formData)
    displayResult(result)
  }
  
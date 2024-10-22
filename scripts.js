function generateWorkout() {
    const level = document.getElementById('fitness-level').value;
    let workoutPlan = '';
    let workoutImgSrc = '';  

    // Level and workouts
    if (level === 'beginner') {
        workoutPlan = '<p><strong>Beginner Workout Plan:</strong><br>Warm-up: 5 minutes of light cardio (e.g., jogging, jumping jacks) <br> Bodyweight squats: 15 reps <br> Push-ups: 10 reps <br> Lunges: 10 reps per leg <br>Crunches: 20 reps <br>Plank: Hold for 30 seconds</p>';

        workoutImgSrc = 'images/beginner-workout.jpg';
    } else if (level === 'intermediate') {
        workoutPlan = '<p><strong>Intermediate Workout Plan:</strong><br>Warm-up: 10 minutes of cardio (e.g., running, swimming) <br> Squats with weights: 12 reps <br> Bench press: 10 reps <br> Lunges with dumbbells: 12 reps per leg <br> Dumbbell rows: 12 reps <br> Bicycle crunches: 20 reps</p>';

        workoutImgSrc = 'images/intermediate-workout.jpg';
    } else {
        workoutPlan = '<p><strong>Advanced Workout Plan:</strong><br>Warm-up: 15 minutes of high-intensity interval training (HIIT) <br> Back squats: 10 reps <br> Overhead press: 10 reps <br> Deadlifts: 8 reps <br> Pull-ups: 10 reps <br> Leg raises: 20 reps</p>';

        workoutImgSrc = 'images/advanced-workout.jpg';
    }
    document.getElementById('workout-plan').innerHTML = workoutPlan;

    const workoutImg = document.getElementById('workout-img');
    workoutImg.src = workoutImgSrc;
    workoutImg.style.display = 'block';  
}

// Generate Meal Plan
function generateMealPlan() {
    const preference = document.getElementById('diet-preference').value;
    let mealPlan = '';
    let mealImgSrc = '';  

   
    if (preference === 'vegan') {
        mealPlan = `
            <p><strong>Vegan Meal Plan:</strong></p>
            <ul>
                <li><strong>Breakfast (8:00 AM):</strong> Smoothie (1 cup of almond milk, 1 banana, 1 tablespoon of peanut butter)</li>
                <li><strong>Snack (10:30 AM):</strong> Apple with almond butter (1 medium apple, 2 tablespoons)</li>
                <li><strong>Lunch (12:30 PM):</strong> Salad (2 cups mixed greens, 1/2 cup chickpeas, 1/4 avocado, olive oil dressing)</li>
                <li><strong>Snack (3:00 PM):</strong> Hummus with carrot sticks (1/4 cup hummus, 1 cup carrot sticks)</li>
                <li><strong>Dinner (6:30 PM):</strong> Stir-fried veggies (1 cup mixed vegetables, 1 cup cooked quinoa)</li>
            </ul>`;
        mealImgSrc = 'images/vegan.jpg';  
    } else if (preference === 'keto') {
        mealPlan = `
            <p><strong>Keto Meal Plan:</strong></p>
            <ul>
                <li><strong>Breakfast (8:00 AM):</strong> Scrambled eggs (3 eggs, 1 tablespoon of butter)</li>
                <li><strong>Snack (10:30 AM):</strong> Cheese (2 ounces of cheddar)</li>
                <li><strong>Lunch (12:30 PM):</strong> Avocado Salad (1 avocado, 2 cups of greens, olive oil dressing)</li>
                <li><strong>Snack (3:00 PM):</strong> Celery with cream cheese (2 stalks, 2 tablespoons)</li>
                <li><strong>Dinner (6:30 PM):</strong> Grilled Chicken (6 ounces) with roasted broccoli (1 cup)</li>
            </ul>`;
        mealImgSrc = 'images/keto.jpg';  
    } else {
        mealPlan = `
            <p><strong>Balanced Meal Plan:</strong></p>
            <ul>
                <li><strong>Breakfast (8:00 AM):</strong> Oatmeal (1 cup cooked) with berries (1/2 cup)</li>
                <li><strong>Snack (10:30 AM):</strong> Greek yogurt (1 cup) with honey (1 tablespoon)</li>
                <li><strong>Lunch (12:30 PM):</strong> Chicken Salad (4 ounces of chicken, 2 cups of mixed greens, vinaigrette)</li>
                <li><strong>Snack (3:00 PM):</strong> Handful of nuts (1/4 cup)</li>
                <li><strong>Dinner (6:30 PM):</strong> Grilled Salmon (6 ounces) with steamed asparagus (1 cup)</li>
            </ul>`;
        mealImgSrc = 'images/balance.png';  
    }

    document.getElementById('meal-plan').innerHTML = mealPlan;

    
    const mealImg = document.getElementById('meal-img');
    mealImg.src = mealImgSrc;
    mealImg.style.display = 'block';  
}

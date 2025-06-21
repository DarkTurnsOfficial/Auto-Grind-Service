// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Auto-grinding plans data
    const grindingPlans = [
        {
            title: "1 Day Plan",
            price: 1.59,
            discount: false,
            features: [
                "Auto Purchase Seed Shop Seeds",
                "Auto purchase Gear Shop Gears",
                "Auto Purchase Cosmetics",
                "Auto Purchase Eggs",
                "Auto Plant Seeds",
                "Stack Plants in one place",
                "Auto Place Eggs & More!",
                "Non-stop grinding until subscription ends"
            ]
        },
        {
            title: "7 Day Plan",
            price: 3.59,
            discount: false,
            features: [
                "Auto Purchase Seed Shop Seeds",
                "Auto purchase Gear Shop Gears",
                "Auto Purchase Cosmetics",
                "Auto Purchase Eggs",
                "Auto Plant Seeds",
                "Stack Plants in one place",
                "Auto Place Eggs & More!",
                "Non-stop grinding until subscription ends"
            ]
        },
        {
            title: "30 Day Plan",
            price: 6.99,
            originalPrice: 12.99,
            discount: true,
            discountText: "New User Exclusive: 50% Off",
            features: [
                "Auto Purchase Seed Shop Seeds",
                "Auto purchase Gear Shop Gears",
                "Auto Purchase Cosmetics",
                "Auto Purchase Eggs",
                "Auto Plant Seeds",
                "Stack Plants in one place",
                "Auto Place Eggs & More!",
                "Non-stop grinding until subscription ends"
            ]
        },
        {
            title: "180 Day Plan",
            price: 49.99,
            discount: false,
            features: [
                "Auto Purchase Seed Shop Seeds",
                "Auto purchase Gear Shop Gears",
                "Auto Purchase Cosmetics",
                "Auto Purchase Eggs",
                "Auto Plant Seeds",
                "Stack Plants in one place",
                "Auto Place Eggs & More!",
                "Non-stop grinding until subscription ends"
            ]
        },
        {
            title: "365 Day Plan",
            price: 99.99,
            discount: false,
            features: [
                "Auto Purchase Seed Shop Seeds",
                "Auto purchase Gear Shop Gears",
                "Auto Purchase Cosmetics",
                "Auto Purchase Eggs",
                "Auto Plant Seeds",
                "Stack Plants in one place",
                "Auto Place Eggs & More!",
                "Non-stop grinding until subscription ends"
            ]
        }
    ];

    // Pets data
    const pets = [
        {
            name: "Dragonfly",
            price: 4.99,
            icon: "fas fa-dragon"
        },
        {
            name: "Chicken Zombie",
            price: 1.20,
            icon: "fas fa-drumstick-bite"
        },
        {
            name: "Raccoon",
            price: 5.90,
            icon: "fas fa-crow"
        },
        {
            name: "Queen Bee",
            price: 2.98,
            icon: "fas fa-crown"
        },
        {
            name: "Butterfly",
            price: 6.70,
            icon: "fas fa-feather-alt"
        },
        {
            name: "Discobee",
            price: 6.50,
            icon: "fas fa-compact-disc"
        }
    ];

    // Render grinding plans
    const grindingContainer = document.querySelector('.cards-container');
    grindingPlans.forEach(plan => {
        const planId = plan.title.toLowerCase().replace(/\s+/g, '-');
        
        const planCard = document.createElement('div');
        planCard.className = 'card';
        planCard.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${plan.title}</h3>
                <div class="card-price">
                    ${plan.discount ? `<s>$${plan.originalPrice}</s> ` : ''}
                    $${plan.price}
                </div>
                ${plan.discount ? `<div class="highlight">${plan.discountText}</div>` : ''}
            </div>
            <div class="card-body">
                <ul class="features">
                    ${plan.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                </ul>
                
                <div class="form-group">
                    <label class="form-label">Roblox Username</label>
                    <input type="text" class="form-input" id="username-${planId}" placeholder="Enter your Roblox username">
                </div>
                
                <div class="payment-methods">
                    <div class="payment-method active" onclick="selectPaymentMethod(this, 'cashapp', '${planId}')">
                        <i class="fas fa-dollar-sign"></i>
                        <div>Cash App</div>
                    </div>
                    <div class="payment-method" onclick="selectPaymentMethod(this, 'realcash', '${planId}')">
                        <i class="fas fa-money-bill-wave"></i>
                        <div>Real Cash (IRL)</div>
                    </div>
                </div>
                
                <div class="payment-details active" id="cashapp-details-${planId}">
                    <p>Send payment via Cash App to: <strong>$darkturns</strong></p>
                </div>
                
                <div class="payment-details" id="realcash-details-${planId}">
                    <p>Contact us via Discord to arrange in-person cash payment.</p>
                </div>
                
                <button class="btn" onclick="purchaseService('${plan.title}', ${plan.price}, 'username-${planId}', 'cashapp-details-${planId}', 'realcash-details-${planId}')">
                    <i class="fas fa-shopping-cart"></i> Purchase Now
                </button>
            </div>
        `;
        grindingContainer.appendChild(planCard);
    });

    // Render pets
    const petsContainer = document.querySelector('.pets-container');
    pets.forEach(pet => {
        const petId = pet.name.toLowerCase().replace(/\s+/g, '-');
        
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.innerHTML = `
            <div class="pet-image">
                <i class="${pet.icon}"></i>
            </div>
            <div class="pet-details">
                <h3 class="pet-name">${pet.name}</h3>
                <div class="pet-price">$${pet.price}</div>
                
                <div class="form-group">
                    <label class="form-label">Roblox Username</label>
                    <input type="text" class="form-input" id="username-${petId}" placeholder="Enter your Roblox username">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Quantity</label>
                    <select class="form-select" id="quantity-${petId}">
                        <option value="1">1 Pet</option>
                        <option value="5">5 Pets</option>
                        <option value="10">10 Pets</option>
                        <option value="20">20 Pets</option>
                        <option value="30">30 Pets</option>
                        <option value="50">50 Pets</option>
                        <option value="60">60 Pets</option>
                    </select>
                </div>
                
                <div class="payment-methods">
                    <div class="payment-method active" onclick="selectPetPaymentMethod(this, 'cashapp', '${petId}')">
                        <i class="fas fa-dollar-sign"></i>
                        <div>Cash App</div>
                    </div>
                    <div class="payment-method" onclick="selectPetPaymentMethod(this, 'realcash', '${petId}')">
                        <i class="fas fa-money-bill-wave"></i>
                        <div>Real Cash (IRL)</div>
                    </div>
                </div>
                
                <div class="payment-details active" id="cashapp-details-${petId}">
                    <p>Send payment via Cash App to: <strong>$darkturns</strong></p>
                </div>
                
                <div class="payment-details" id="realcash-details-${petId}">
                    <p>Contact us via Discord to arrange in-person cash payment.</p>
                </div>
                
                <button class="btn" onclick="purchasePet('${pet.name}', ${pet.price}, 'username-${petId}', 'quantity-${petId}', 'cashapp-details-${petId}', 'realcash-details-${petId}')">
                    <i class="fas fa-paw"></i> Buy Now
                </button>
            </div>
        `;
        petsContainer.appendChild(petCard);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Payment method selection functions
function selectPaymentMethod(element, method, planId) {
    const container = element.closest('.card-body');
    container.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
    element.classList.add('active');
    
    container.querySelectorAll('.payment-details').forEach(d => d.classList.remove('active'));
    container.querySelector(`#${method}-details-${planId}`).classList.add('active');
}

function selectPetPaymentMethod(element, method, petId) {
    const container = element.closest('.pet-details');
    container.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
    element.classList.add('active');
    
    container.querySelectorAll('.payment-details').forEach(d => d.classList.remove('active'));
    container.querySelector(`#${method}-details-${petId}`).classList.add('active');
}

// Purchase functions
function purchaseService(plan, price, usernameId, cashappId, realcashId) {
    const username = document.getElementById(usernameId).value;
    const cashappActive = document.getElementById(cashappId).classList.contains('active');
    const paymentMethod = cashappActive ? 'Cash App' : 'Real Cash (IRL)';
    
    if (!username) {
        alert('Please enter your Roblox username');
        return;
    }
    
    const totalPrice = price;
    const paymentInstructions = cashappActive ? 
        `Send $${totalPrice.toFixed(2)} via Cash App to $darkturns` : 
        'Contact us via Discord to arrange in-person payment';
    
    alert(`Order Confirmation:\n\nPlan: ${plan}\nPrice: $${totalPrice.toFixed(2)}\nRoblox Username: ${username}\nPayment Method: ${paymentMethod}\n\n${paymentInstructions}\n\nWe'll process your order within 24 hours!`);
    
    sendToDiscord(`${plan} Subscription`, totalPrice, username, paymentMethod);
}

function purchasePet(pet, price, usernameId, quantityId, cashappId, realcashId) {
    const username = document.getElementById(usernameId).value;
    const quantity = document.getElementById(quantityId).value;
    const cashappActive = document.getElementById(cashappId).classList.contains('active');
    const paymentMethod = cashappActive ? 'Cash App' : 'Real Cash (IRL)';
    
    if (!username) {
        alert('Please enter your Roblox username');
        return;
    }
    
    const totalPrice = price * quantity;
    const paymentInstructions = cashappActive ? 
        `Send $${totalPrice.toFixed(2)} via Cash App to $darkturns` : 
        'Contact us via Discord to arrange in-person payment';
    
    alert(`Order Confirmation:\n\nPet: ${pet}\nQuantity: ${quantity}\nPrice: $${totalPrice.toFixed(2)}\nRoblox Username: ${username}\nPayment Method: ${paymentMethod}\n\n${paymentInstructions}\n\nWe'll process your order within 24 hours!`);
    
    sendToDiscord(`${pet} Pet (x${quantity})`, totalPrice, username, paymentMethod);
}

// Discord notification function
function sendToDiscord(item, price, username, paymentMethod) {
    const webhookURL = "https://discord.com/api/webhooks/1385804419219718154/YVX7_eMeTa-rK7oQYvCVl8jdWeJR1z8JPRldVevRN92PZvnviRg5ispYftxie6DoooEQ";
    const message = {
        content: `New Purchase: ${item} for $${price.toFixed(2)}`,
        embeds: [{
            title: "New Order Notification",
            description: `A new purchase has been made on Grow A Garden Services`,
            color: 0x2e7d32,
            fields: [
                { name: "Item", value: item, inline: true },
                { name: "Price", value: `$${price.toFixed(2)}`, inline: true },
                { name: "Roblox Username", value: username, inline: true },
                { name: "Payment Method", value: paymentMethod, inline: true }
            ],
            timestamp: new Date().toISOString(),
            footer: { text: "Grow A Garden Services" }
        }]
    };
    
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message)
    });
}

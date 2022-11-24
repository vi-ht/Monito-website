const catList =
    [{
        id: 1, name: "British Long Hair", gene: "Male", age: "02 months", color: "blackWhite", price: "5000000", image: "ASSET/Cat.png", breed: "small", location: "Vietnam", vaccine: true, deworm: false, cert: false, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`,
        profileImage: ["https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.668xw:1.00xh;0.191xw,0&resize=640:*",
            "https://media.timeout.com/images/105799745/image.jpg",
            "https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head.jpg",
            "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=1200,fit=cover/article/main-picture/630896b35c4d5453789502.png",
            "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/03/GettyImages-512366437-e1583519258231.jpg",
            "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/03/GettyImages-512366437-e1583519258231.jpg"],
        feedback: ["https://images.everydayhealth.com/images/emotional-health/stress/playing-with-a-dog-helps-you-feel-less-stressed-722x406.jpg",
            "https://www.katalay.net/images/gallery/images/animals/are-dogs-good-for-human-health-1.jpg",
            "https://www.fuehldichgut.info/wp-content/uploads/2020/10/pexels-freestocksorg-129634.jpg",
            "https://www.banyanmentalhealth.com/wp-content/uploads/2020/04/pet-addiction-recovery-1200x480.jpg",
            "https://therecover.com/wp-content/uploads/2020/09/pet-effect-2.jpg",
            "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2019/07-08/What+to+Know+About+Mental+Health+Care+and+Dogs+-min.jpg",
            "https://i.ndtvimg.com/i/2017-10/puppy-650-unsplash_650x400_61507811078.jpg",
            "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/01/13/roverstockphoto-0.jpg?width=1200",]
    },
    {
        id: 2, name: "American Bobtail Cat Breed", gene: "Female", color: "apricot", age: "02 months", price: "3900000", image: "ASSET/Cat1.jpg", breed: "medium", location: "Vietnam", vaccine: true, deworm: true, cert: true, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`,
        profileImage: ["https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
            "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.668xw:1.00xh;0.191xw,0&resize=640:*",],
        feedback: ["https://images.everydayhealth.com/images/emotional-health/stress/playing-with-a-dog-helps-you-feel-less-stressed-722x406.jpg",
            "https://www.katalay.net/images/gallery/images/animals/are-dogs-good-for-human-health-1.jpg",
            "https://www.fuehldichgut.info/wp-content/uploads/2020/10/pexels-freestocksorg-129634.jpg",
            "https://www.banyanmentalhealth.com/wp-content/uploads/2020/04/pet-addiction-recovery-1200x480.jpg",
           ]
    },
    {
        id: 3, name: "American Curl Cat Breed", gene: "Male", color: "black", age: "2 months", price: "4000000", image: "ASSET/Cat2.jpg", breed: "medium", location: "Vietnam", vaccine: false, deworm: true, cert: true, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 4, name: "American Short hair Cat", gene: "Male", color: "blackWhite", age: "2 months", price: "8900000", image: "ASSET/Cat3.jpg", breed: "medium", location: "Vietnam", vaccine: true, deworm: false, cert: false, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 5, name: "Abyssinian Cat", gene: "Male", color: "apricot", age: "2 months", price: "7900000", image: "ASSET/Cat4.jpg", breed: "small", location: "Vietnam", vaccine: true, deworm: true, cert: true, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 6, name: "American Wirehair Cat Breed", color: "apricot", gene: "Male", age: "2 months", price: "9000000", image: "ASSET/Cat5.jpg", breed: "small", location: "Vietnam", vaccine: false, deworm: true, cert: true, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 7, name: "Bombay Cat", gene: "Male", color: "black", age: "2 months", price: "6500000", image: "ASSET/Cat6.jpg", breed: "small", location: "Vietnam", vaccine: true, deworm: true, cert: true, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 8, name: "Chartreux Cat Breed", gene: "Female", color: "silver", age: "2 months", price: "5000000", image: "ASSET/Cat7.jpg", breed: "small", location: "Vietnam", vaccine: true, deworm: false, cert: false, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 9, name: "Birman Cat Breed", gene: "Female", color: "tan", age: "2 months", price: "5000000", image: "ASSET/Cat8.jpg", breed: "small", location: "Vietnam", vaccine: true, deworm: true, cert: true, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.` }];

const petList =
    [{
        id: 1, name: "Hamster yellow hair", gene: "Male", color: "apricot", age: "02 months", price: "5000000", image: "ASSET/Pet.jpg", breed: "small", location: "Vietnam", vaccine: true, deworm: true, cert: true, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 2, name: "Hamster robo", gene: "Female", color: "tan", age: "02 months", price: "3900000", image: "ASSET/Pet1.jpg", breed: "small", location: "Vietnam", vaccine: false, deworm: true, cert: false, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 3, name: "White alcapa", gene: "Male", color: "tan", age: "2 months", price: "4000000", image: "ASSET/Pet3.png", breed: "large", location: "Vietnam", vaccine: true, deworm: false, cert: true, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 4, name: "Big parrot", gene: "Male", color: "apricot", age: "02 months", price: "5000000", image: "ASSET/Pet4.png", breed: "medium", location: "Vietnam", vaccine: false, deworm: true, cert: true, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 5, name: "Grey hamster", gene: "Female", color: "blackWhite", age: "02 months", price: "3900000", image: "ASSET/Pet6.jpg", breed: "small", location: "Vietnam", vaccine: true, deworm: true, cert: false, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 6, name: "Yellow bird", gene: "Male", color: "apricot", age: "2 months", price: "4000000", image: "ASSET/Pet5.jpg", breed: "small", location: "Vietnam", vaccine: true, deworm: false, cert: true, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.` },
    ];

const dogList =
    [{
        id: 1, name: "Pomeranian White", gene: "Male", color: "silver", age: "02 months", price: "5000000", image: "ASSET/Dog1.png", breed: "small", location: "Vietnam", vaccine: true, deworm: true, cert: false, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 2, name: "Poodle Tiny Yellow", gene: "Female", color: "tan", age: "02 months", price: "3900000", image: "ASSET/Dog2.png", breed: "medium", location: "Vietnam", vaccine: true, deworm: false, cert: true, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 3, name: "Poodle Tiny Sepia", gene: "Male", color: "red", age: "2 months", price: "4000000", image: "ASSET/Dog3.png", breed: "large", location: "Vietnam", vaccine: true, deworm: true, cert: true, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 4, name: "Alaskan Malamute Grey", gene: "Male", color: "silver", age: "2 months", price: "8900000", image: "ASSET/Dog4.png", breed: "large", location: "Vietnam", vaccine: false, deworm: true, cert: false, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.` },
    {
        id: 5, name: "Pembroke Corgi Cream", gene: "Male", color: "tan", age: "2 months", price: "7900000", image: "ASSET/Dog5.png", breed: "medium", location: "Vietnam", vaccine: false, deworm: false, cert: true, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 6, name: "Pembrole Corgi Tricolor", gene: "Male", color: "blackWhite", age: "2 months", price: "9000000", image: "ASSET/Dog6.png", breed: "small", location: "Vietnam", vaccine: true, deworm: true, cert: true, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 7, name: "Pomeranian White", gene: "Male", color: "blackWhite", age: "2 months", price: "6500000", image: "ASSET/Dog7.png", breed: "small", location: "Vietnam", vaccine: true, deworm: true, cert: false, micro: true, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`},
    {
        id: 8, name: "Poodle Tiny Dairy Cow", gene: "Female", color: "blackWhite", age: "2 months", price: "5000000", image: "ASSET/Dog8.png", breed: "small", location: "Vietnam", vaccine: false, deworm: false, cert: true, micro: false, publishDate: "November 23, 2023 16:00:00",
        note: `Pure breed Shih Tzu.
    Good body structure.
    With MKA cert and Microchip.
    Father from champion lineage.`}];

const productList =
    [{ name: "Reflex Plus Adult Cat Food Salmon", cate: "cat", product: "food", size: "385gm", price: "140000", image: "ASSET/Product1.png", content: "Free Toy & Free Shaker" },
    { name: "Reflex Plus Adult Cat Food Salmon", cate: "cat", product: "food", size: "1.5kg", price: "165000", image: "ASSET/Product2.png", content: "Free Toy & Free Shake" },
    { name: "Cat scratching ball toy kitten sisal rope ball", cate: "cat", product: "toy", price: "1000000", image: "ASSET/Product3.png", content: "Free Cat Food" },
    { name: "Cute Pet Cat Warm Nest", cate: "cat", product: "toy", price: "400000", image: "ASSET/Product4.png", content: "Free Cat Food" },
    { name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil", cate: "dog", product: "sup", size: "385 grams", price: "350000", image: "ASSET/Product5.png", content: "Free Toy & Free Shake" },
    { name: "Costumes Fashion Pet Clother Cowboy Rider", cate: "dog,cat", product: "costume", size: "1.5kg", price: "500000", image: "ASSET/Product6.png", content: "Free Toy & Free Shake" },
    { name: "Costumes Chicken Drumsti Headband", cate: "dog,cat", product: "costume", price: "400000", image: "ASSET/Product7.png", content: "Free Cat Food" },
    { name: "Plush Pet Toy", product: "toy", cate: "cat,dog", price: "250000", image: "ASSET/Product8.png", content: "Free Food & Free Shake" },
    { name: "Pedigree Food", product: "toy", cate: "dog", price: "250000", image: "ASSET/Product9.png", content: "Free Food & Free Shake" }];

const knowledgeList =
    [{
        id: 1, name: "My Dog Sounds Congested When Sleeping – Is Something Wrong?", content: `While your dog is sound asleep, you might be awake worrying if there’s something wrong with their breathing. If they sound congested or are breathing more heavily than they usually would, it can be alarming. There are many reasons your dog may experience congestion, most of which are nothing to worry about.

    They may have a cold or have changed into an odd sleeping position. Whatever the case may be, we will go over why your dog may sound congested and when to consult a vet.`, image: "ASSET/Knowledge1.png", banner: "ASSET/Knowledge1-big.png", src: "https://wildearth.com/blogs/dog-knowledge/my-dog-sounds-congested-when-sleeping",
        main: [
            {
                title: "What Does It Mean If My Dog Sounds Congested?", content: `Typically, when your dog sounds congested when sleeping, nothing is wrong. However, it may be a sign of something more severe in some cases. If you notice signs of congestion in your dog, keep a close eye on it and note any changes.
     For example, if your dog gasps for air in the middle of the night or their strange sounds worsen, you shouldn’t ignore it. First, let’s rule out some of the most common reasons for congestion in dogs at night.`},
            {
                title: "Common Reasons for Nighttime Congestion in Dogs", content: "Here are the most common reasons dogs are congested at night.", childContent: [{
                    title: "Your Dog’s Sleeping Position ", content: `You know how when your partner sleeps on their back, they always seem to snore all night long? Dogs are like humans in that the way they sleep affects their breathing.

      If it seems like your dog only makes strange sounds in their sleep while lying in an unusual position, you more than likely have no reason to be concerned. However, if the noises persist, no matter how they lie, there may be another cause.`},
                {
                    title: "Allergies or a Cold", content: `Dogs are more like people than we think and can experience allergies or catch a cold. Our pups go through the same symptoms that an allergic reaction or illness gives us.

      If you suspect that your dog has an allergy, it’s best to consult your veterinarian to determine what they’re reacting to.
      
      Dogs that have colds will have a stuffy nose, causing some congestion. You may notice other symptoms in combination, such as sneezing or a runny nose. They may even have a fever. If your dog experiences cold or allergy symptoms combined with loud breathing at night, it’ll likely pass on its own.`},
                {
                    title: "Dental Issues", content: `Poor doggy dental health may cause various issues, including congested sounds. If your pup has an infection or a cavity, it can affect how they sound in their sleep. Their mouth is connected to their airway, so any irritation may transfer to their breathing.

      It may be a good idea if it’s been a while since you’ve taken your dog for a dental exam. Even if it’s not the cause of their congestion, dental issues in dogs can lead to other health problems.`},
                { title: "Medication Side Effects", content: `Have you given your dog a new medication recently? If so, check the side effects to see if they include congestion. Some medicines may also make dogs feel drowsier, causing them to have a deeper sleep, which may cause snoring sounds.` },
                {
                    title: "Obesity", content: `Obese and overweight dogs can cause poor health, including their lungs. Ensure that your dog is within the recommended weight range for their breed. You’ll also need to ensure that you feed them the proper portions of food and give them the appropriate amount of exercise for their breed and size.

      Offer treats sparingly, as the calories can quickly add up. You can also use healthier treats, such as baby carrots, that your pup is sure to love just as much. `},
                {
                    title: "Dogs Breeds With Congested Breathing ", content: `Some dog breeds are more prone to congested breathing than others due to their anatomy. Flat-faced dogs suffer from BOAS (Brachycephalic Obstructive Airway Syndrome) due to their skull shape obstructing their airway.

      If you have a dog breed such as a pug or French bulldog, this is normal for their species. While there’s nothing you can do to stop their odd noises, you can take measures to ensure your dog is comfortable while they sleep.`},
                {
                    title: "Age", content: `Older dogs are more likely to snore or sound congested while they sleep. As they age, the nerves in their airways start to weaken. Although this is normal and is usually not a cause for concern, it could signify laryngeal paralysis.

      If you notice that the congestion or snoring disturbs your senior dog, talk to your veterinarian to rule out any illnesses.`},
                {
                    title: "Secondhand Smoke", content: `We all know that if you smoke a cigarette near another person, it can affect their lungs. Unfortunately, secondhand smoke can also cause irreversible damage to your pup’s lungs. The inflammation the smoke causes to their airways can cause snoring or congestion.

      If you smoke, always do so outside, away from any people or pets.`}]
            },
            {
                title: "What Can You Do if Your Dog Is Congested?", content: `Although congestion is normal in dogs, there are some ways you can help them, especially if they have a cold.`, childContent: [{ title: "Find The Root Cause of The Congested Sleeping", content: `Once you rule out any potential causes, you can narrow down what the root cause is. If it’s something you can help with, such as their weight, start by working on that issue. On the other hand, if you’re unsure or you suspect it’s something outside your control, your veterinarian can create the right treatment plan if needed.` },
                {
                    title: "Try Home Remedies", content: `If your dog has other cold-like symptoms or you suspect seasonal allergies, here are some remedies to help them with congestion:

       Antihistamines can help dogs the same way they help people. Consult your vet to get the proper dosage.
       Use a humidifier at night; some extra humidity may help clear their airways. 
       Get rid of any lingering bacteria by cleaning their bedding, bowls, toys, or anything else they use regularly
       Chicken soup helps dogs just as much as humans who are congested. Feed them lukewarm low-sodium broth, cooked veggies, and brown rice to help clear their sinuses. `}]
            },
            { title: "Final Thoughts", content: `You usually don’t need to worry if your dog sounds congested at night. In some cases, it can be indicative of issues. If they exhibit any symptoms or if you’re unsure what’s causing it, your veterinarian can help determine the reason for their congestion and work out a treatment plan if one is needed.` }]
    },
    {
        id: 2, name: "Why Does My Dog Lay on Me? Is Something Wrong With This Case?", content: `Dogs will often claim whatever space they feel entitled to, even one on top of their owner. Dog owners often become accustomed to this behavior. Sometimes, the space is on their owner’s chest or their laps. This closeness might be a habit, but have you ever wondered why dogs like to lay on their owners? 

        Dogs will snuggle with their owners for many reasons. Some dogs are affectionate and want to show their love and respect given they see you as the pack leader. It is pretty common for your furry friend to want to share your personal space.`, image: "ASSET/Knowledge2.png", banner: "ASSET/Knowledge2-big.png", src: "https://wildearth.com/blogs/dog-knowledge/why-does-my-dog-lay-on-me",
        main: [
            {
                title: "Reasons Why Dogs Lay on Their Owners", content: `Dogs are born into litters and are used to having several siblings to snuggle with. As they grow older and are adopted into a forever home, they want the security that comes with closeness. Canines will often lay on their owners to protect what they love.

            Most dog owners appreciate these bonding experiences with their canine companions. Cuddling with your dog can be calming, and it can create a sense of security for the owner and the dog.`,
                childContent:
                    [{
                        title: "Warmth and Comfort", content: `One reason that dogs love to lay on their owners is for extra warmth. You might find that your furry friend is looking for extra cuddles late at night or early in the morning, and they are simply seeking a warm place.

            You might find your pet climbing into your lap after being outside when it is cold or rainy, and they are usually searching for a warm, dry place to nap.
            
            It would help if you considered adding a blanket to their bed or where they usually sleep. Their sleeping area should be adequately heated.` },
                    {
                        title: "Reinforce the Behavior", content: `Many dog owners reinforce certain behaviors without even realizing it. When your dog started laying on top of you, it was probably natural to scratch his head or give him a belly rub. In your dog’s mind, you rewarded him for snuggling.

            To discourage your dog from laying on you, you will have to redirect him. Gently pushing him away with a firm “no” is the first step. Bring your dog to his sleeping area and reward him with a treat and snuggles. ` },
                    {
                        title: "Seeking Attention", content: `Your dog may be lonely. If you have been away from home, you may find your dog lying on you because he has missed you. Dogs are social animals, and when left alone, they can become lonely, just like humans. They seek your attention, and dogs need the security of knowing their owner loves them.

            Spending a few minutes giving your dog some extra attention when arriving home will help ease their loneliness.` },
                    {
                        title: "Protection", content: `Dogs are protective of their humans, some more than others. If they sense a threat, dogs will often lay on their owners. Sometimes, the danger might be a car backfiring or someone unfamiliar with entering their home. Whether the threat is real or perceived, dogs have the instinct to protect their two-legged pack leader.

            On the other hand, your dog may be looking for protection, and they might want you to protect them from the rumbles of thunder, fireworks, loud voices or any other loud noises that frighten them. In many cases, owners will find their dogs trembling with fear, and these dogs will require some soothing to calm them.` },
                    { title: "Jealousy", content: `Like human siblings, dogs can get jealous of their pet siblings. Your dog may lay on you to take your attention away from the other animals in the home. When giving attention to animals, giving each animal an equal amount of cuddles is crucial.` },
                    { title: "Affection", content: `Some dogs are more affectionate than others. Some dogs are happy to lay in their owners’ laps all day. Usually, these are smaller breeds. These dogs require a great deal of attention.` },
                    { title: "Food or Treats", content: `Laying on you might be a simple reminder that it is time for a treat or supper. Dogs will sometimes lay on their owners if they want something. They might be trying to convince you that it is time to go for a walk or a drive in the car.` },
                    { title: "Mood Changes", content: `Dogs become attached to their owners and quickly sense their mood changes. If they feel their owners are sad or upset, they will often lay on them to comfort them. ` },
                    {
                        title: "Anxiety", content: `A reason your dog may be laying on you that might cause concern is anxiety. Some dogs from shelters, puppy mills, or that have once been stray may suffer from anxiety. 

            It is challenging to deal with some of the behaviors exhibited by dogs who suffer from anxiety. Anxious dogs require a great deal of patience and understanding. Dogs suffering from anxiety can have aggressive outbursts against specific people or objects. They will often require attention from their human caregiver to soothe them.
            
            Dogs suffering from anxiety can often be treated with antidepressants or anti-anxiety medication that your veterinarian can prescribe.` }

                    ]
            },
            {
                title: "Establish a Routine", content: `Dogs are creatures of habit. It is best to choose a specific time of the day when you can give your dog your undivided attention, and you can invite your pet into your lap and give them some uninterrupted snuggle time.

            Dogs will soon recognize the routine and expect his cuddle time at a particular time. You should choose a time that you can commit to regularly. Once dogs have been accustomed to a routine, it is tough to change their expectations.
            
            For the most part, dogs laying on their owners is perfectly normal, and it is their way of showing that they love you. They also want to feel loved, so they require that physical touch. 
            
            Dogs will often nudge you with their noses while lying on you because they want you to pet them or give them belly rubs. These physical touches soothe them and make them feel secure. There is nothing better than the bond between a dog and its human.` },]
    },
    {
        id: 3, name: "Crusty Scabs on a Dog’s Back: Causes, Treatment, & Prevention", content: `Everyone in the family suffers when you find crusty scabs on your dog’s back. The last thing we want is for our canine companions to be uncomfortable.

    When your dog has a skin issue that causes scabbing on their back, it can lead to excessive licking and scratching. Your dog unknowingly aggravates the condition, introducing bacteria that can cause infection. 
    
    Your poor pup may be left feeling agitated, and you may feel at a loss for what to do.
    
    Of course, your first line of consultation should always be with your veterinarian. They can help you identify why your dog has crusty scabs on its back and how to administer the quickest remedy to make everyone comfortable again. 
    
    Here we will explore the various causes of crusty scabs on a dog, what you can do to make your dog more comfortable, and ways to prevent skin issues that can lead to scabbing in dogs. `, image: "ASSET/Knowledge3.png", banner: "ASSET/Knowledge3-big.png", src: "https://wildearth.com/blogs/dog-knowledge/crusty-scabs-on-a-dogs-back",
        main: [
            {
                title: "Common Causes of Crusty Scabs on a Dog", content: `Skin issues can be particularly difficult to deal with because there are so many different causes, both internal and external.

    The most common causes of scabbing on your dog’s back may be:`, list: "Allergies,Parasites,Infections", childContent: [{
                    title: "Allergies", content: `Skin allergies are becoming increasingly common in dogs and can come from many different places. 

    Some allergic reactions in a dog’s skin can come from something internal. Often, the first culprit your veterinarian will look at is your dog’s food to see if any ingredients are known to cause skin irritation. 
    
    Medicines or treats are other examples of things that may be causing a reaction inside your dog’s body that causes crusty scabs on their back.
    
    Other allergies are external, meaning they come from your dog’s environment. There is a huge list of things that might cause a reaction, from pollen to pesticides to shampoo. Secondhand smoke and cosmetic products you use on yourself, then transfer to your dog, may also cause reactions.
    
    Allergies cause a histamine reaction that might make your dog itch uncontrollably. It is incredibly important to be mindful of your dog’s internal and external environment to quickly identify any factors that may be causing a skin reaction.`}, {
                    title: "Parasites", content: `Parasites and pests are the dread of every dog owner. These tiny, nasty bugs are unfortunately something pretty much every pet owner experiences at one point or another. If your dog has fleas or develops a mite problem, don’t be ashamed and focus on finding treatment.

    Fleas are the most commonly known parasite to cause scabs on a dog’s back. The feces, saliva, and bites that fleas leave behind can cause severe reactions in some pets. It is essential to maintain a proper anti-flea regime for your pet.
    
    Ticks work solo rather than in colonies but can still cause life-changing diseases to people and pets. Not only can ticks transmit infections through their bite, but the bite itself can become infected if the tick embeds itself in your dog’s skin. 
    
    Mites are a normal part of your dog’s microbiology, but certain conditions can lead to an infestation of different types of mites. These infestations are recognizable by their severity and are treatable. `}, {
                    title: "Infections", content: `Any scratch or cut on a dog’s skin can become infected without proper care. 

    However, there are types of skin infections, such as yeast infections, that are not a result of injury. Although a yeast infection usually occurs in areas like the ears and underarms, other conditions such as contact dermatitis can happen anywhere on a dog’s body.
    
    Folliculitis is another bacterial infection that can cause sore bumps and scabs. Early signs include dryness and flaking.`}]
            },
            {
                title: "How to Treat Scabs on Your Dog’s Skin", content: `Your veterinarian can provide proper diagnosis and treatment for whatever skin condition your dog is suffering from. These treatments may include either lifestyle adjustments or medications.

    Sometimes you need to change your dog’s food to relieve their skin condition or add an oily supplement to provide more moisture for their skin and coat. There may also be products in the home that you need to remove if your dog is having a reaction. 
    
    Other treatments include topical or oral medications that can clear up bacterial or fungal infections. 
    
    While you should always follow the advice of your veterinarian, there are some gentle and safe at-home remedies and supplements you can introduce to improve the health of your dog’s skin and provide them some comfort during the flare-up.`, childContent: [{
                    title: "Coconut Oil", content: `Coconut oil is a safe substance that can improve the health of your dog’s skin and coat. It is extremely gentle, and although it may not be ideal to have a greasy pup running around, it can provide comfort to dry skin. 

    With its antifungal and antibacterial properties, coconut oil can calm the inflammation associated with skin issues.
    
    If the oiliness is a problem, talk to your vet about supplementing your dog’s diet with coconut oil.`}, { title: "Oatmeal", content: "Oatmeal has powerful anti-inflammatory properties that can relieve general itching when used as a poultice." }, { title: "Chamomile Spray", content: "A mess-free solution to help your dog feel more comfortable amid skin problems is a strong brew of chamomile tea cooled in a spray bottle. Apply as needed. " }]
            },
            {
                title: "How to Prevent Scabs on Your Dog’s Skin", content: `Preventative treatment is the best way to be proactive about the long-term health of your dog.

    Keeping up with yearly wellness visits as well as all flea, tick, and parasite regimes is essential to your pet’s overall health. 
    
    It is also worth educating yourself on how to deal with common parasites, like how to remove a tick, for example. 
    
    Ultimately, the best way to prevent scabbing on your dog’s back or skin is to know your dog inside and out. Pay close attention to any changes in your pet, mental or physical. Being familiar with your pet’s unique “normal” will help you quickly identify any issues so you can get your beloved pet’s tail wagging again as soon as possible.`}]
    },
    {
        id: 4, name: "How Long Will My Puppy Poop Worms After Deworming", content: `Worms are one of the more unpleasant aspects of owning a dog. Seeing your dog rubbing its behind on the floor isn’t only gross but sad. Worms cause both stomach discomfort and itchiness, which can irritate your dog. 

    Puppies are the most at risk for contracting worms. Many pet owners wonder how long will my puppy poop worms after deworming. So, let’s jump into worms, deworming, and the question of pooping.
    
    `, image: "ASSET/Knowledge4.png", banner: "ASSET/Knowledge4-big.png", src: "https://wildearth.com/blogs/dog-knowledge/how-long-will-my-puppy-poop-worms-after-deworming",
        main: [{
            title: "Deworming—What is it and Why is it Important?", content: `Most worms infect a dog’s digestive system, mainly the colon. Some species, such as heartworm, impact the circulatory system, including the heart. Deworming refers to the removal of digestive worms through the use of medication. 

    The medication comes in pill form or as an injection. To deworm a puppy, you must give your dog the exact dosage of deworming medication the veterinarian recommends. Deviating from the required number of pills or timing can cause the worms to return. 
    
    Deworming is important because worms cause a whole host of trouble for any dog. Puppies, in particular, are at risk of developing complications. Some of the symptoms include:`, list: "Diarrhea or vomiting,Weight loss,Stomach pain,Lethargy,Dehydration,Poor coat,Swollen abdomen,Blood in their poop,Nutrient deficiencies"
        },
        {
            title: "Types of Worms That Affect Puppies", content: `There are four common worm types that affect a puppy’s digestive tract. They are roundworms, tapeworms, hookworms, and whipworms. `,
            childContent: [{
                title: "Roundworms", content: `Two types of roundworms infect dogs—Toxocara canis (T. canis) and Toxascaris leonina. Although dogs can get either type of worm, T. canis is much more common in puppies, and they can transmit it to humans.

    Roundworms can infect puppies through their mother’s milk or while still in utero. Other ways puppies get infected are by consuming roundworm eggs, which they can find in dirt, other dogs, dead animals, or fecal matter. 
    
    People often say roundworms look like spaghetti that moves. They can grow up to a few inches long. Their eggs are generally white, round, and smooth.`},
            {
                title: "Tapeworms", content: `Puppies can only contract tapeworm from infected fleas. When an infected flea gets eaten by a puppy, the tapeworm eggs infect the dog. Tapeworms can cause serious health issues in puppies, such as stunting their growth.

    Tapeworms are long, flat creatures with segmented bodies. They can grow up to 12 inches long in dogs. Each segment of the body can detach when it dies. These pieces get pooped out and are often the first sign your dog has a tapeworm.`},
            {
                title: "Hookworms", content: `Hookworms get their name from their small, hook-shaped mouths. They are tiny, measuring only a quarter of an inch long. They can be almost impossible to notice. Hookworms consume a lot of blood in the intestine, which can cause anemia.

    Puppies will contract hookworm from eating something infected with worms. That will happen either through their mother’s milk, or in utero. The most common signs of hookworm are abdominal pain, lethargy, and in severe cases, anemia`},
            {
                title: "Whipworms", content: `Whipworms are another small worm, measuring a quarter of an inch in length. Dogs contract whipworm by eating infected poop or other substances. Whipworm eggs are extremely hardy, illustrated by their ability to survive on surfaces for up to five years!

    Whipworm eggs are microscopic, so it’s almost impossible to know if a surface is infected. Chronic diarrhea is the most common sign of a whipworm infection, along with lethargy and abdominal pain. `}]
        },
        {
            title: "How Long Will My Puppy Poop Worms After Deworming?", content: `Puppies will generally continue pooping worms for a week after a deworming treatment. In rare cases, it can take up to two weeks to stop seeing worms in their poop.

    If the treatment is working, the worms your puppy deposits in their stool should be dead. Dead worms are less white and more translucent than ones that are alive. 
    
    Deworming treatments generally begin working about 12 hours after you give them the deworming treatment. `},
        {
            title: "How Often is Deworming Necessary?", content: `If you got your puppy from a reputable breeder or rescue, they should’ve already had their first deworming treatment. Most veterinarians recommend asking the breeder when they had a deworming treatment so you know the exact date. 

    After their first deworming, you should deworm your puppy every four weeks until they reach at least four months old. Younger puppies are more susceptible to worm infections. A puppy may have three or four worm infections in the first few months of their life. 
    
    Once your puppy reaches four months old, veterinarians recommend reducing deworming treatments to twice a year. By doing so, you can prevent your adult dog from experiencing the pain and discomfort caused by worms. `},
        { title: "Deworming Side Effects", content: `Although deworming is a safe and effective means of killing the worms infecting your puppy, it does come with some side effects. Here are the most common side effects associated with deworming medication.` },
        {
            title: "Final Thoughts On Deworming", content: `Worms are a nightmare for pet owners. In the end, the best way to get rid of them is to use a deworming agent recommended by your vet. And although many pet owners may wonder how long will my puppy poop worms after deworming, it isn’t that important.

    What’s more is clearing out the worm infection so your puppy can lead a happy, healthy life. So, if you’re thinking about getting a puppy, don’t forget about the dewormer!`}]
    },
    {
        id: 5, name: "Anxiety & Depression in Dogs: Causes, Symptoms, and How to Help", content: `Scientists are still trying to scientifically prove that dogs have emotions, but one thing all dog owners agree on is that their canine companions feel human to them. 

    Like humans, dogs have their share of hormones that can get out of balance. When that happens, your pet may experience feelings of anxiety or depression. This can also be caused or heightened by experiences or changes that may be going through.`, image: "ASSET/Knowledge5.png", banner: "ASSET/Knowledge5-big.png",
        src: "https://wildearth.com/blogs/dog-knowledge/anxiety-and-depression-in-dogs",
        main: [
            {
                title: "Causes of Anxiety and Dog Depression", content: `Dog depression and anxiety can have a variety of causes. Pinpointing what’s upsetting your dog can help you treat the problem. `,
                childContent: [{ title: "Separation Anxiety", content: `Separation anxiety in dogs is more common than you’d think. It’s also a significant cause of canine anxiety and upset. Dogs typically experience separation anxiety if they are home alone for long periods, they lose a family member (pet or human) or they are rehomed too early ` },
                {
                    title: "Strange Environment ", content: `Another cause of dog depression and anxiety is an unfamiliar environment. 

    Smell plays a critical role in the way dogs perceive the world, and the more a place smells like them, the happier they are. 
    
    If you move house, expect some anxiety from your dog for the first few weeks. The new house smell may be pleasant for you, but dogs find it extremely disconcerting. That’s because they like to leave scent markers on their territory. It lets visiting dogs know whose house it is. Without those, any strange dog could claim your living room from under you.`},
                {
                    title: "New Family Members ", content: `Some dogs become stressed or anxious when there’s a new addition to a family, whether the new member is another dog or a human. 

    New babies can be a primary cause of canine anxiety. The combination of noise and attention they generate disrupts your dog’s routine and, sometimes, makes them feel like their place in the pack is threatened. 
    
    For this reason, getting a new dog immediately after losing an old one is typically discouraged, especially when the loss occurs in a bonded pair. `},
                {
                    title: "Boredom", content: `Like people, dogs need a rich and varied life to keep them healthy and happy. Dogs with regular simulation will be naturally happier than dogs left to their own devices all day. 

    Of course, dogs also have as many personalities as people, and some dogs are content to lounge all day in sunspots. Others like to be active. So when determining whether or not your dog has anxiety or depression, ensure you take their personality into account.`}]
            },
            {
                title: "Symptoms of Anxiety and Depression in Your Dog ", content: `Although the causes of dog depression and anxiety can vary, there are a few classic symptoms that tip a dog’s hand to the observant owner.`,
                childContent: [{
                    title: "Circling or Pacing", content: `Circling or pacing is a classic sign of depression or anxiety in dogs who feel lonely. You will most likely see this behavior as you get ready for work. The dog becomes so anxious about the separation that they begin pacing to see if you have left yet. 

    Some dogs couple this with whining, squealing, or even howling.`},
                { title: "Inappropriate Elimination", content: `Another classic sign of canine anxiety is inappropriate elimination. As your dog becomes more stressed, it may start disregarding basic training and do its toileting indoors.` },
                {
                    title: "Nervous Tail Syndrome", content: `While not a medical condition, it is how we talk about dog anxiety in our family. Dogs say a lot with their tail, even if it’s not the arrogant question mark cats carry around.

    A happy dog wags its tail. 
    
    A nervous dog curls its tail under its legs. An anxious or depressed dog always carries its tail this way, not just when it’s frightened or nervous.`},
                ]
            },
            {
                title: "How You Can Help With Your Dogs Depression or Anxiety", content: `So that’s what causes canine anxiety and depression. And now you know how to spot it. But what can you do to help?`,
                childContent: [{
                    title: "Pheromone Dispensing Therapy", content: `Typically, treating a problem depends on the diagnosis. But when you have an anxious or depressed dog, pheromone therapy helps, whatever the reason. This is a topic that can be beneficial to talk through with your veterinarian before starting in order to get their recommendations and advice.

    To do this, buy a pheromone dispenser and plug it into the wall. These dispensers release calming synthetic pheromones that help your dog relax. These can help break the anxiety cycle and allow your dog to relax.`},
                {
                    title: "Environmental Enrichment", content: `Another way to treat depression or anxiety in dogs is by introducing more stimuli to their routine.

    Dogs that spend all day alone at the house might benefit from a dog walker. Alternatively, dogs that need more attention than you can give may respond positively to puzzle toys. 
    
    These enrichment toys don’t need to be expensive. A homemade hide and seek puzzle involving cardboard and a favorite treat will be as effective as anything on Amazon. The important thing is to get your dog active and interested in its surroundings again.`},
                {
                    title: "Spending Time With Your Dog", content: `Finally, one of the best cures for depression and anxiety in dogs is to spend time with them. Dogs don’t ask for a lot, but they do like to know you love them.

    Crucially, don’t be hurt if it seems your dog wants that extra time from a particular family member. Dogs are hierarchal animals, and if you have a new baby in the house, they will be savvy enough to realize there’s a primary caregiver. 
    
    When that happens, dogs naturally want the caregiver’s attention because they’ve marked them as the top dog. 
    
    If you’re introducing a new animal to the household, ensure there are still activities you do exclusively with the existing dog until the animals warm up to each other. It will help with the adjustment period and ensure everyone feels included.`}]
            },
            {
                title: "Conclusion", content: `Like people, dogs experience anxiety and depression for all sorts of reasons. And since dogs can’t talk, getting to the root of the problem can be challenging. 

    The important thing is that you know your dog best, so stay attuned to its moods and consider how sudden changes can affect it. 
    
    Finally, never underestimate the value of a cuddle by the tv or walk in the park. After all, dogs are man’s best friend for a reason.`},
        ]
    },
    {
        id: 6, name: "Do Shih Tzus Shed? How To Effective Manage Shedding", content: `Shih Tzus are renowned for their intelligence and their attractive two-layered hair. While their undercoats are soft and hairy, the topcoats are long, thin, and silky. But, do Shih Tzus shed? If so, how do you manage their shedding?
    Like other dog breeds, Shih Tzus do shed. However, they don’t shed much because they have hair instead of fur. You only notice the shed hair when washing or brushing Shi Tzus’ topcoats. Some situations could contribute to your Shih Tzu shedding excessively, including age and food. Shih Tzus are known for their intelligence but they are also known for their long fur which contributes to how much they shed.`, image: "ASSET/Knowledge6.png", banner: "ASSET/Knowledge6-big.png",
        src: "https://wildearth.com/blogs/dog-knowledge/do-shih-tzus-shed",
        main: [{ title: "Factors Contributing to Shih Tzus Shedding Excessively", content: "Shih Tzus have hair and only lose a small amount daily, which gets caught in their long topcoat. That said, this small breed sometimes sheds its silky hair excessively. This trend can be instigated by:", list: "Age,Pregnancy,Changes in temperature,Health issues,Poor diet" },
        {
            title: "Shih Tzus Shed More When Transitioning to Adulthood", content: `A Shih Tzu pup may not shed hair at all. Puppies have short, fine, thin coats that rarely shed hair.

    The shedding intensity increases as Shih Tzu puppies transition to adulthood. Excessive shedding happens when these dogs are 9-12 months.
    
    This shedding is expected during the transitional phase and shouldn’t last more than three weeks.`},
        {
            title: "Shih Tzus Shed More in Warmer Seasons", content: `Season changes can make your beautiful Shih Tzu shed its long hair excessively. Like most animals, Shih Tzus react to seasons by either shedding or growing hair.

    These dogs shed less hair in moderate weather conditions than in hot conditions.
    
    The logic behind the loss of hair is simple. When the weather gets warmer in spring, Shi Tzus need less hair to avoid heat. The shedding intensifies in summer to keep their bodies cool. The temperature in this season becomes unbearably hot since the sun shines for longer hours than it does in spring-autumn. 
    
    Shedding allows new thicker coats to grow in preparation for winter. Expect your Shih Tzu to shed less in winter and more in summer.`},
        {
            title: "Pregnancy May Cause Excessive Shedding in Female Shih Tzus", content: `Do Shih Tzus shed due to pregnancy? Not every female Shih Tzu experiences excessive hair loss during pregnancy and after birthing.

    Some female Shi Tzus may shed hair due to hormonal changes brought about by pregnancies in the last stages.
    
    The process in which the dog sheds excessively after giving birth is called coat blowing.
    
    Coat blowing is a normal process in double-coated dogs when transitioning to summer from winter, but in Shih Tzus, it also happens after pregnancies.`},
        {
            title: "A Poor Diet May Contribute To Shedding", content: `Shih Tzu parents should be mindful of the food they feed their dogs as this may affect their normal shedding. Any slight change in diet can make Shih Tzus shed hair excessively.

    Knowing how to choose the best food for your dog is essential for their health. The food should have a good amount of fat or protein to prevent your Shih Tzu’s hair coats from becoming dry and brittle. A dry and brittle haircoat is prone to breaking easily.
    
    Before buying commercial food for your Shih Tzu, consider the ingredients used in making it. The best food for these dogs should include beef, pork, chicken, liver, or lamb, which helps develop their muscles.
    
    To maintain their strong, thin, and silky hair, include foods rich in omega 3 and 6 fatty acids.`},
        {
            title: "Final Thoughts On Shih Tzus Shedding", content: `So do Shih Tzus shed? Yes, they do shed, ruling out the misconception about them being non-shedders. Unlike other dog breeds with fur coats, Shih Tzus have hair, meaning they shed less.

    Excessive shedding in Shih Tzus might happen in hotter months when they are pregnant, and as a result of poor health. Shedding can also be caused by allergens and transitionary phases. 
    
    Shedding is a normal process that creates space for new healthy hair to grow. But if you notice any abnormal shedding, consult your vet.`}]
    },];

export { catList, petList, dogList, productList, knowledgeList };

// main: [
//     {title: "", content: "", list: "", childContent: [{title: "", content: ""},{title: "", content: ""}]},
//     {title: "", content: "", list: "", childContent: [{title: "", content: ""},{title: "", content: ""}]},
//     {title: "", content: "", list: "", childContent: [{title: "", content: ""},{title: "", content: ""}]}]},
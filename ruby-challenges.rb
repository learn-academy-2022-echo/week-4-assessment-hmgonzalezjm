# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Utilize a method that takes a parameter of num as an argument of num1, num2, num3
# I will then define a conditional statement that assesses if a number is even or if its odd using a modulo
# String interpolation will be used to return the string "is odd" or "is even"
# P will be used to print num1, num2, num3

def odd_even num
    if num % 2 !=0
        "{num} is odd"
    else num % 2 ==0
        "{num} is odd"
    end
end

p odd_even num1
p odd_even num2
p odd_even num3

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

#PC:
# Use a method called vowel_str that takes in a parameter of a string and uses string an argument
# Using .delete the vowels will be removed from the string
# I want to make sure to include the vowels capitalized so I capture those vowels in the string that are capitalized

 def vowel_str string
    p string.delete 'aeiouAEIOU'
 end





beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.


# Create a method caled find_p that takes in a string
# Use .downcase to make it possible to check
# Use conditionals to determine if the string is lowercase and reversed using .downcase and .reverse
# Use string interpolation to output if a palindrome or not

def find_p string
    palindrome_string = string.downcase
    if palindrome_string == string.downcase.reverse
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# 'Merica

def merica(argument)
    argument << "" if argument.is_a? String
end

puts argument("Only in America!") #=> Only in America!

# Max Value
const_num_max = (2 ** (0.size * 8 - 2) - 1)

def max_value(array)
    const_num_max = maxval
    array.each do |i|
        maxval = i if i > maxval
    end
end

puts max_value([1, 2, 4]) # => [4, 1]

# Conversion Within Arrays

array1: [:toyota, :tesla],
array2: [:"Prius", :"Model S"]

def conversion(array1, array2)
    [array1, array2].transpose.to_h
end

puts conversion(array1, array2)

# Transmogrifier

def transmogrifier(num1, num2, num3)
    num1 + num2 = sum
    sum * num3 = total
end

# Introduce

def introduce(name_one, name_two)
    name_one << "meet" << name_two
end


# Shout

def shout *str
    str.each do | word |
        puts word.upcase
    end
end

shout "offset", "skrrrt", "skrrrrt", "skrrrrrt", "hello world"

# String Info Within String

def string_info(str)
    output = {
        original: str,
        length: str.length,
        snaked: str.downcase.split.join('_')
    }
end


    

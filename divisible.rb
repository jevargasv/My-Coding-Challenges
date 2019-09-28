def divisible?(number, divider)
    if number % divider == 0
        return true
    else
        divider == 0
        return false
    end
end


def number_divisible_filter(number, divider)
    divider_values = divider.map { |divider|
        if number % divider == 0
            return [true]
        else
            return [false]
    end 
    }       
end


def numbers_divisible_filter(numbers, dividers)
    divider_values = divider.map { |divider|
        if numbers % dividers == 0
            return [true][true]
        else
            return [false][true]
    end
    }
end
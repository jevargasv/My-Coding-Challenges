# Animal List
animal_text = IO.readlines("animals.txt")

animal_text.each do |line|
    key = line.split(":")

    properties = key[1].split(',')
end

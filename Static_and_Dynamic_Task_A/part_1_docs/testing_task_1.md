### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.

Note that we are only looking for errors here.

**Not** any issues with, i.e.: 
Thinking that methods should be renamed or should be class level, or using string interpolation etc. 

These aren't errors but rather standards that vary from developer to developer. 

Only comment on errors that would stop the tests running.

```python

class CardGame:


  def check_for_ace(self, card):
    if card.value = 1:
    # double ==  missing above  
      return True
    else
    # colon missing from else above
      return False
   

  dif highest_card(self, card1 card2):
  # "dif" should be def
  if card1.value > card2.value:
    return card
  else:
    return card2
   #comma missing between card1 and card2.
   #incorrect indentation on the if else statement.
  


def cards_total(self, cards):
  total
  # total requires a value (== 0)
  for card in cards:
    total += card.value
    return "You have a total of" + total
  # indentation  return should be inline with "for" for loop to work. String needs to be formatted with braces round total. 
```

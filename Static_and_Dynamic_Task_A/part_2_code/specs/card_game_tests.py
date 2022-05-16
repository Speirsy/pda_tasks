import unittest
from src.card import Card
from src.card_game import CardGame

class TestCardGame(unittest.TestCase):
    
    def setUp(self):
        self.card = Card("spades", 1)
        self.card1 = Card("diamonds", 5)
        self.card2 = Card("hearts", 10)
        self.card_game = CardGame()
        self.cards = [self.card, self.card1, self.card2]


    def test_can_check_for_ace(self):
        result = self.card_game.check_for_ace(self.card)
        self.assertEqual(True, result)

    def test_can_check_for_ace(self):
        self.assertEqual(True, self.card_game.check_for_ace(self.card))
        

    def test_can_check_highest_card(self):
        result = self.card_game.highest_card(self.card1, self.card2)
        self.assertEqual(self.card2, result)

   

    def test_can_check_highest_card(self):
        self.assertEqual(self.card2, self.card_game.highest_card(self.card1, self.card2))

    def test_cards_total(self):
        result = self.card_game.cards_total(self.cards)
        self.assertEqual("You have a total of + 16", result)


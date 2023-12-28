module P0020 where

isBalanced :: String -> Bool
isBalanced s =
  isBalanced' [] s
  where
    isBalanced' stack s
      | null s = null stack
      | isOpeningBracket (head s) = isBalanced' (matchBracket (head s) : stack) (tail s)
      | null stack = False
      | matchBracket (head s) == head stack = isBalanced' (tail stack) (tail s)
      | otherwise = False
      where
        matchBracket bracket
          | bracket == "(" = ")"
          | bracket == "[" = "]"
          | bracket == "{" = "}"
        isOpeningBracket bracket
          | bracket == "(" = True
          | bracket == "[" = True
          | bracket == "{" = True
          | otherwise = False

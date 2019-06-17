## Reflection

Overall

- Overall I think things went pretty well. I finished everything I had really wanted to, and I got to do a couple things from
my "nice to have" list as well, although I did not make it super far into it. Definitely the biggest struggle for me was
getting the spells working, as it was my first time using classes, and they have weird interactions and patterns.

Problems

- The first big problem I really encountered was figuring out everything to do with spells. For one, making the spells form
the correct shape was hard, especially with the water one. Then, I found that my code would break every time a spell was formed off-stage. Due to this, I tried a few different approaches. One was adding an extra invisible layer of walls around the outside
of the map, but it ended up being a lot more work. So in the end, I figured out a way to just not spawn it if the x or y coordinate
of the spell was greater or lesser than 20 or 0 respectively.

- The next problem was collision. I had not thought much of it until I got to implementing it, which is when I realized how hard
it was for me, especially since I previously decided to put my spells into the grid instead of overtop. This meant that if two
things were in the same spot on the grid, there were issues as a spot in the grid cannot be more than one thing at a time. The only way I could think to fix this was to add separate variables for certain things, such as playerOneX and playerTwoY, which were each just a
number.
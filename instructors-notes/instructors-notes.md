* The code is horrible in many ways. Make sure they know it’s an artificial exercise when they start to spot the horribleness, but don’t prompt them to expect horrible code too much. 
* You don’t need to say it upfront, but if asked the idea is that this code initialises a calculator from a file, but the average could then be adjusted at runtime. 

There’s no perfect path through the test, but a good way for a candidate to approach it is this: 

* Run the test file, and ideally preserve the output. 
* Spend a few minutes reading through what is there, ideally pointing out anything that looks particularly bad (see below). 
* Identify that they need to start by replicating what test file as a unit test 
* i.e. it doesn’t matter if the averages are correct, this is widely used code and you can’t refactor until you lock down existing functionality. 
* Recognise that in its current form, printing to the console, the code can’t be unit tested. 
* You actually could do some clever print output interception stuff, but it would take a while and that’s missing the point about the horrible code structure :)
* Work out that print_average is using the avg property and decide that this can be used as the basis for unit tests. 
* Discover that whilst Mean works, Mode stops working and always returns zero. 
* Explain their test is good and it's something else so next part of exercise is to figure out what's wrong
* It’s because Mode overrides print_average to lazily calculate the average.
* A few rare people spot this at the start from the code inspection. 
* Improve the inheritance structure either by actually refactoring, or verbally explained in the last 5 minutes when asked “what are the main things you’d change”: 
* Push file loading up to base class so factory loads the file and initialises the calculator, and calculators themselves are just state holders and calculate. 
* Add non-implemented base methods to add_value and _calc_average and implement in the inherited classes 
* Improve the factory implementation
* Move the file loading into a module method

Some of the code’s worst aspects different people will spot different things, some are more serious than others: 
 
* Very poorly defined object hierarchy. 
* The mode average calcualtion is a mess, and doesn't work, and can be simplified greatly 
* Different code performs identical file loading functions in Mean and Mode classes, rather than being shared. 
* Overridden print_average() method in Mode, which is inefficient  
* The averages are not actually correct.  
* Poor and inconsistent handling of errors, validation of inputs, etc. 
* Non-standard (PEP-8) coding conventions

There are so many problems for a few reasons:

1. To see if the candidate can follow instructions and focus i.e. primary goal is unit test; refactoring is secondary and needs to be safe.
2. To see if the candidate gets very distracted easily by things they consider to be nasty, ie. diving in and rewriting loads of things before a unit test is in place. They would do that to live code too, and what they consider nasty could in reality be perfectly acceptable code. 
3. To see if they even notice that it’s bad code. 
4. To ensure that there are a few viable paths through the exercise, ie. there’s no single  signposted correct answer someone will either spot or not spot.

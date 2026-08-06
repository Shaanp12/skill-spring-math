const lessons = [
  {
    id: "vertex-form",
    course: "Quadratics",
    order: 2,
    title: "Vertex Form and X-Intercepts",
    category: "Quadratic Equations",
    icon: "x²",
    description: "Convert a quadratic into vertex form and use it to solve for both x-intercepts.",
    videoId: "6k11Amby7Hc",
    points: ["Recognize y = a(x − h)² + k", "Identify the vertex (h, k)", "Set y = 0 to find x-intercepts"],
    questions: [
      q("What is the vertex of y = (x − 3)² + 2?", ["(3, 2)", "(-3, 2)", "(2, 3)", "(3, -2)"], 0, "In y = a(x − h)² + k, the vertex is (h, k)."),
      q("What is the vertex of y = 2(x + 4)² − 5?", ["(4, -5)", "(-4, -5)", "(-4, 5)", "(2, -5)"], 1, "x + 4 is x − (−4), so h = −4."),
      q("Which equation has vertex (2, -7)?", ["y=(x+2)²−7", "y=(x−2)²−7", "y=(x−7)²+2", "y=(x+7)²−2"], 1, "Use y = a(x − h)² + k."),
      q("For y = (x − 1)² − 9, what are the x-intercepts?", ["x=1 and x=9", "x=-2 and x=4", "x=-8 and x=10", "x=-3 and x=3"], 1, "Set 0=(x−1)²−9, so (x−1)²=9 and x−1=±3."),
      q("For y = (x + 2)² − 16, what are the x-intercepts?", ["x=-6 and x=2", "x=-2 and x=16", "x=-4 and x=4", "x=-18 and x=14"], 0, "Set (x+2)²=16, so x+2=±4."),
      q("Does y = (x − 5)² + 1 have real x-intercepts?", ["Yes, two", "Yes, one", "No", "Cannot tell"], 2, "(x−5)² cannot equal −1 for real x."),
      q("What is the axis of symmetry of y = 3(x + 6)² − 2?", ["x=3", "x=6", "x=-6", "x=-2"], 2, "The axis of symmetry is x = h."),
      q("In y = -2(x − 4)² + 8, does the parabola open up or down?", ["Up", "Down", "Neither", "Both"], 1, "A negative a-value means the parabola opens downward."),
      q("What is the minimum value of y = (x + 1)² − 4?", ["-4", "-1", "1", "4"], 0, "The parabola opens upward, so the vertex y-value −4 is the minimum."),
      q("Rewrite x² − 6x + 9 in vertex form.", ["(x−3)²", "(x+3)²", "(x−9)²", "(x−6)²+9"], 0, "x²−6x+9 is a perfect-square trinomial.")
    ]
  },
  {
    id: "radicals-basic",
    course: "Radicals",
    order: 1,
    title: "Simplifying Basic Radicals",
    category: "Radical Expressions",
    icon: "√",
    description: "Use perfect-square factors to simplify square-root expressions.",
    videoId: "_3yJOas0kJQ",
    points: ["Find perfect-square factors", "Simplify square roots", "Recognize fully simplified form"],
    questions: [
      q("Simplify √36.", ["3", "6", "18", "36"], 1, "6 × 6 = 36."),
      q("Simplify √12.", ["2√3", "3√2", "4√3", "6"], 0, "√12 = √(4×3) = 2√3."),
      q("Simplify √18.", ["2√3", "3√2", "6√2", "9"], 1, "√18 = √(9×2) = 3√2."),
      q("Simplify √50.", ["5√2", "2√5", "10√5", "25√2"], 0, "√50 = √(25×2) = 5√2."),
      q("Simplify √72.", ["6√2", "8√2", "3√8", "12√2"], 0, "√72 = √(36×2) = 6√2."),
      q("Which is already simplified?", ["√20", "2√5", "√45", "3√8"], 1, "5 has no perfect-square factor greater than 1."),
      q("Simplify 3√8.", ["6√2", "3√2", "12√2", "24"], 0, "√8 = 2√2, then multiply by 3."),
      q("Simplify √98.", ["7√2", "2√7", "14√7", "49√2"], 0, "√98 = √(49×2) = 7√2."),
      q("Simplify √27.", ["9√3", "3√3", "2√3", "3√9"], 1, "√27 = √(9×3) = 3√3."),
      q("Simplify 2√48.", ["8√3", "4√3", "6√2", "16√3"], 0, "√48 = 4√3, then 2×4√3 = 8√3.")
    ]
  },
  {
    id: "higher-roots",
    course: "Radicals",
    order: 2,
    title: "Cube Roots and Fourth Roots",
    category: "Radical Expressions",
    icon: "∛",
    description: "Simplify and multiply expressions containing cube roots and fourth roots.",
    videoId: "-MIQEfK0Dgo",
    points: ["Recognize perfect cubes and fourth powers", "Simplify higher roots", "Multiply radical expressions"],
    questions: [
      q("Simplify ∛8.", ["2", "4", "8", "16"], 0, "2³ = 8."),
      q("Simplify ∛27.", ["3", "6", "9", "27"], 0, "3³ = 27."),
      q("Simplify ∜16.", ["2", "4", "8", "16"], 0, "2⁴ = 16."),
      q("Simplify ∛54.", ["3∛2", "2∛3", "6∛3", "9∛2"], 0, "54 = 27×2."),
      q("Simplify ∛128.", ["4∛2", "2∛4", "8∛2", "4∛8"], 0, "128 = 64×2 and ∛64=4."),
      q("Simplify ∜81.", ["3", "9", "27", "81"], 0, "3⁴ = 81."),
      q("What is ∛2 · ∛4?", ["∛6", "2", "4", "∛8²"], 1, "∛2·∛4 = ∛8 = 2."),
      q("What is ∜2 · ∜8?", ["2", "4", "∜10", "8"], 0, "∜2·∜8 = ∜16 = 2."),
      q("Simplify 2∛16.", ["4∛2", "2∛2", "8∛2", "4"], 0, "∛16=2∛2, then multiply by 2."),
      q("Simplify ∜48.", ["2∜3", "4∜3", "3∜2", "2∜6"], 0, "48 = 16×3 and ∜16=2.")
    ]
  },
  {
    id: "scientific-notation",
    course: "Scientific Notation",
    order: 1,
    title: "Scientific Notation",
    category: "Numbers and Operations",
    icon: "10ⁿ",
    description: "Write very large and very small numbers using powers of ten.",
    videoId: "-F7dQJWTAOc",
    points: ["Move the decimal correctly", "Choose positive or negative exponents", "Convert back to standard form"],
    questions: [
      q("Write 4,500 in scientific notation.", ["4.5×10³", "45×10²", "4.5×10⁻³", "0.45×10⁴"], 0, "Move the decimal 3 places left."),
      q("Write 0.0062 in scientific notation.", ["6.2×10³", "6.2×10⁻³", "62×10⁻⁴", "0.62×10⁻²"], 1, "Move the decimal 3 places right, so the exponent is −3."),
      q("Convert 3.1×10⁴ to standard form.", ["310", "3,100", "31,000", "310,000"], 2, "Move the decimal 4 places right."),
      q("Convert 7.5×10⁻² to standard form.", ["0.075", "0.75", "75", "750"], 0, "Move the decimal 2 places left."),
      q("Which is proper scientific notation?", ["0.4×10⁵", "14×10³", "4×10⁴", "400×10²"], 2, "The coefficient must be at least 1 and less than 10."),
      q("Write 82,000,000 in scientific notation.", ["8.2×10⁷", "8.2×10⁶", "82×10⁶", "0.82×10⁸"], 0, "Move the decimal 7 places left."),
      q("Write 0.000009 in scientific notation.", ["9×10⁶", "9×10⁻⁶", "0.9×10⁻⁵", "90×10⁻⁷"], 1, "Move the decimal 6 places right."),
      q("What is (2×10³)(3×10²)?", ["6×10⁵", "5×10⁵", "6×10⁶", "6×10¹"], 0, "Multiply coefficients and add exponents."),
      q("What is (8×10⁶) ÷ (2×10²)?", ["4×10³", "4×10⁴", "6×10⁴", "4×10⁸"], 1, "Divide coefficients and subtract exponents: 6−2=4."),
      q("Which number is largest?", ["9×10³", "1×10⁵", "7×10⁴", "5×10²"], 1, "10⁵ has the greatest power of ten.")
    ]
  },
  {
    id: "distance-formula",
    course: "Coordinate Geometry",
    order: 1,
    title: "The Distance Formula",
    category: "Coordinate Geometry",
    icon: "↗",
    description: "Find the distance between two points on a coordinate plane.",
    videoId: "5eid-YMYKwU",
    points: ["Subtract x- and y-coordinates", "Square each difference", "Take the square root"],
    questions: [
      q("Find the distance between (0,0) and (3,4).", ["5", "7", "12", "25"], 0, "√(3²+4²)=√25=5."),
      q("Find the distance between (1,2) and (1,8).", ["6", "7", "8", "10"], 0, "The points differ only in y: |8−2|=6."),
      q("Find the distance between (-2,3) and (4,3).", ["2", "4", "6", "8"], 2, "The points differ only in x: |4−(−2)|=6."),
      q("Find the distance between (2,1) and (5,5).", ["4", "5", "6", "7"], 1, "√(3²+4²)=5."),
      q("Which formula gives distance?", ["√[(x₂−x₁)²+(y₂−y₁)²]", "(x₂+x₁)+(y₂+y₁)", "(x₂−x₁)(y₂−y₁)", "√(x₂−x₁+y₂−y₁)"], 0, "Distance comes from the Pythagorean theorem."),
      q("Find the distance between (-1,-1) and (2,3).", ["4", "5", "6", "7"], 1, "Differences are 3 and 4, so the distance is 5."),
      q("Find the distance between (4,6) and (7,10).", ["3", "4", "5", "7"], 2, "Differences are 3 and 4."),
      q("Find the distance between (0,0) and (6,8).", ["10", "12", "14", "100"], 0, "√(36+64)=√100=10."),
      q("Find the distance between (-3,2) and (-3,-5).", ["3", "5", "7", "8"], 2, "The vertical distance is |2−(−5)|=7."),
      q("Find the exact distance between (0,0) and (2,2).", ["2", "2√2", "4", "√2"], 1, "√(2²+2²)=√8=2√2.")
    ]
  },
  {
    id: "substitution",
    course: "Systems of Equations",
    order: 2,
    title: "Systems by Substitution",
    category: "Systems of Equations",
    icon: "{ }",
    description: "Solve systems by replacing one variable with an equivalent expression.",
    videoId: "NCDIMR0k89E",
    points: ["Isolate one variable", "Substitute into the other equation", "Check the ordered-pair solution"],
    questions: [
      q("Solve: y=x+1 and x+y=5.", ["(2,3)", "(3,2)", "(1,4)", "(4,1)"], 0, "Substitute x+1 for y: x+x+1=5, so x=2 and y=3."),
      q("Solve: y=2x and x+y=9.", ["(2,4)", "(3,6)", "(6,3)", "(4,8)"], 1, "x+2x=9, so x=3 and y=6."),
      q("Solve: x=y+2 and x+y=8.", ["(5,3)", "(3,5)", "(6,2)", "(4,4)"], 0, "y+2+y=8, so y=3 and x=5."),
      q("What is the first substitution step for y=3x−2 and 2x+y=13?", ["2x+3x−2=13", "2(3x−2)+y=13", "y=13−2x", "3x−2=13"], 0, "Replace y with 3x−2."),
      q("Solve: y=x−4 and 3x+y=12.", ["(4,0)", "(0,4)", "(3,-1)", "(5,1)"], 0, "3x+x−4=12 gives x=4 and y=0."),
      q("Solve: x=2y and x+y=12.", ["(8,4)", "(4,8)", "(6,6)", "(10,2)"], 0, "2y+y=12, so y=4 and x=8."),
      q("A solution to a system must satisfy...", ["Only the first equation", "Only the second equation", "Both equations", "Neither equation"], 2, "The ordered pair must make both equations true."),
      q("Solve: y=5−x and y=x+1.", ["(2,3)", "(3,2)", "(1,4)", "(4,1)"], 0, "Set 5−x=x+1, giving x=2 and y=3."),
      q("If substitution produces 0=0, the system has...", ["No solution", "Exactly one solution", "Infinitely many solutions", "Two solutions"], 2, "The equations represent the same line."),
      q("If substitution produces 0=7, the system has...", ["No solution", "One solution", "Infinitely many solutions", "A solution at (0,7)"], 0, "A false statement means the lines never intersect.")
    ]
  },
  {
    id: "equal-values",
    course: "Systems of Equations",
    order: 1,
    title: "Systems by Equal Values",
    category: "Systems of Equations",
    icon: "=",
    description: "Solve a system by setting two expressions for the same variable equal to each other.",
    videoId: "UdTZ3o8gwWo",
    points: ["Identify two expressions for the same variable", "Set the expressions equal", "Solve and substitute back"],
    questions: [
      q("Given y=2x+1 and y=x+4, what equation should you solve?", ["2x+1=x+4", "2x+1+x+4=0", "2x=x", "y+y=6x"], 0, "Both expressions equal y, so set them equal."),
      q("Solve: y=2x+1 and y=x+4.", ["(3,7)", "(7,3)", "(2,5)", "(4,9)"], 0, "2x+1=x+4 gives x=3, then y=7."),
      q("Solve: y=3x−2 and y=x+4.", ["(3,7)", "(2,4)", "(4,10)", "(1,1)"], 0, "3x−2=x+4 gives x=3 and y=7."),
      q("Solve: y=5x and y=2x+9.", ["(3,15)", "(15,3)", "(2,10)", "(4,20)"], 0, "5x=2x+9 gives x=3 and y=15."),
      q("Why can the two expressions be set equal?", ["They both equal x", "They both equal y", "They have the same slope", "They have the same intercept"], 1, "Quantities equal to the same value are equal to each other."),
      q("Solve: y=4x−6 and y=2x+2.", ["(4,10)", "(10,4)", "(2,2)", "(3,6)"], 0, "4x−6=2x+2 gives x=4 and y=10."),
      q("Solve: y=7−x and y=x+1.", ["(3,4)", "(4,3)", "(2,5)", "(1,6)"], 0, "7−x=x+1 gives x=3 and y=4."),
      q("If equal-values gives 4=4, the system likely has...", ["No solution", "Infinitely many solutions", "One solution", "A negative solution"], 1, "An identity indicates equivalent equations."),
      q("If equal-values gives 3=9, the system has...", ["One solution", "Infinitely many solutions", "No solution", "x=3"], 2, "A contradiction means no intersection."),
      q("After finding x, what should you do next?", ["Stop immediately", "Substitute x into either original equation", "Multiply both equations", "Change the signs"], 1, "Substitution gives the corresponding y-value.")
    ]
  },
 {id:"factoring-quadratics",course:"Quadratics",order:1,title:"Solving Quadratics by Factoring",category:"Quadratic Equations",icon:"×",description:"Factor a quadratic and use the zero-product property.",videoId:null,videoSearch:"factoring quadratic equations",points:["Set the equation equal to zero","Factor the trinomial","Set each factor equal to zero"],questions:[
 q("Solve x²+5x+6=0.",["x=2,3","x=-2,-3","x=-1,-6","x=1,6"],1,"(x+2)(x+3)=0."),
 q("Factor x²+7x+12.",["(x+3)(x+4)","(x-3)(x-4)","(x+2)(x+6)","(x-2)(x-6)"],0,"3 and 4 multiply to 12 and add to 7."),
 q("Solve x²-9=0.",["x=9","x=-9","x=±3","x=3"],2,"Use the difference of squares."),
 q("Factor x²-x-12.",["(x-4)(x+3)","(x+4)(x-3)","(x-6)(x+2)","(x+6)(x-2)"],0,"-4 and 3 work."),
 q("Solve x²-8x+15=0.",["x=-3,-5","x=3,5","x=-1,-15","x=1,15"],1,"(x-3)(x-5)=0."),
 q("Which property is used after factoring?",["Distributive","Zero-product","Associative","Commutative"],1,"A product of zero means a factor is zero."),
 q("Solve 2x²+6x=0.",["x=0,-3","x=0,3","x=2,6","x=-2,-6"],0,"Factor 2x(x+3)."),
 q("Factor x²-10x+25.",["(x-5)²","(x+5)²","(x-25)(x+1)","(x-1)(x-25)"],0,"It is a perfect square."),
 q("Solve x²+2x-15=0.",["x=3,-5","x=-3,5","x=1,-15","x=-1,15"],0,"(x+5)(x-3)=0."),
 q("A quadratic should usually equal what before factoring?",["1","0","x","y"],1,"The zero-product property needs zero.")
 ]},
 {id:"quadratic-formula",course:"Quadratics",order:3,title:"The Quadratic Formula",category:"Quadratic Equations",icon:"±",description:"Use a, b, and c to solve any quadratic equation.",videoId:null,videoSearch:"quadratic formula",points:["Write standard form","Identify a, b, and c","Substitute and simplify"],questions:[
 q("In 2x²+5x-3=0, what is c?",["2","5","-3","3"],2,"c is the constant."),
 q("Which is the quadratic formula?",["(-b±√(b²-4ac))/(2a)","(b±√(b²+4ac))/a","-b/(2a)","±√(a+b+c)"],0,"This solves ax²+bx+c=0."),
 q("Solve x²-5x+6=0.",["x=2,3","x=-2,-3","x=1,6","x=-1,-6"],0,"The formula gives 2 and 3."),
 q("If the discriminant is 0, how many distinct real roots?",["0","1","2","4"],1,"The two answers are equal."),
 q("Discriminant of x²+2x-3=0?",["16","-8","4","8"],0,"4-4(1)(-3)=16."),
 q("A negative discriminant means...",["two real roots","one real root","no real roots","x=0"],2,"Its square root is not real."),
 q("Solve x²-4=0.",["x=±2","x=4","x=-4","x=±4"],0,"The roots are ±2."),
 q("In -3x²+7x+1=0, a equals...",["3","-3","7","1"],1,"a is the x² coefficient."),
 q("Why use parentheses around a negative b?",["change a","avoid sign mistakes","remove the radical","make c positive"],1,"It protects the sign."),
 q("The denominator is...",["2a","2b","4ac","b²"],0,"Everything is divided by 2a.")
 ]},
 {id:"elimination",course:"Systems of Equations",order:3,title:"Systems by Elimination",category:"Systems of Equations",icon:"−",description:"Add or subtract equations to eliminate a variable.",videoId:"6Sz5uyBaJuY",videoSearch:"elimination method systems equations",points:["Line up like terms","Create opposite coefficients","Add and substitute back"],questions:[
 q("Solve x+y=7 and x-y=1.",["(4,3)","(3,4)","(6,1)","(1,6)"],0,"Add to get 2x=8."),
 q("3y+(-3y) equals...",["6y","-6y","0","y"],2,"Opposites cancel."),
 q("Solve 2x+y=8 and 2x-y=4.",["(3,2)","(2,4)","(4,0)","(1,6)"],0,"Add to get 4x=12."),
 q("To eliminate x in x+2y=7 and 3x-y=5, multiply the first by...",["-3","3","-2","2"],0,"This creates -3x."),
 q("Solve x+2y=9 and x-2y=1.",["(5,2)","(2,5)","(4,2.5)","(6,1.5)"],0,"Add to get 2x=10."),
 q("After finding one variable...",["stop","substitute back","divide by zero","change signs"],1,"Find the other coordinate."),
 q("Solve 3x+y=11 and 3x-y=7.",["(3,2)","(2,3)","(1,8)","(4,-1)"],0,"Add to get 6x=18."),
 q("If elimination gives 0=5...",["one solution","no solution","infinite solutions","x=5"],1,"It is a contradiction."),
 q("If elimination gives 0=0...",["no solution","infinite solutions","two solutions","x=0"],1,"The equations may be the same line."),
 q("Which pair eliminates y immediately?",["2x+y=5; x+y=4","2x+3y=7; x-3y=2","x+2y=6; x+2y=8","3x+y=9; 2x+2y=4"],1,"3y and -3y cancel.")
 ]},
 {id:"cones-cylinders",course:"Volume and Surface Area",order:2,title:"Volume and Surface Area of Cones and Cylinders",category:"Geometry",icon:"◒",description:"Calculate volume and surface area using radius and height.",videoId:"QBcILdxYwNo",videoSearch:"volume surface area cones cylinders",points:["Cylinder volume πr²h","Cone volume ⅓πr²h","Include every required surface"],questions:[
 q("Cylinder volume with r=3,h=5?",["15π","30π","45π","90π"],2,"π(3²)(5)=45π."),
 q("Cone volume with r=3,h=5?",["15π","45π","30π","5π"],0,"One third of 45π."),
 q("A matching cone has what fraction of a cylinder's volume?",["1/2","1/3","2/3","3"],1,"Cone volume includes 1/3."),
 q("Cylinder lateral area with r=2,h=6?",["12π","24π","16π","48π"],1,"2πrh=24π."),
 q("Closed-cylinder total area with r=2,h=6?",["24π","28π","32π","40π"],2,"24π+8π=32π."),
 q("Cone lateral area uses...",["diameter","slant height","vertical height only","volume"],1,"The formula is πrl."),
 q("Cone lateral area with r=4,l=5?",["9π","20π","40π","80π"],1,"π(4)(5)=20π."),
 q("Total area of that cone?",["20π","24π","36π","40π"],2,"Add base area 16π."),
 q("Volume uses...",["linear units","square units","cubic units","degrees"],2,"Volume is three-dimensional."),
 q("Surface area uses...",["linear units","square units","cubic units","liters only"],1,"Area uses squared units.")
 ]}
,
{
 id:"pythagorean-theorem",course:"Right Triangles",order:1,
 title:"Using the Pythagorean Theorem",category:"Geometry",icon:"△",
 description:"Use a²+b²=c² to find missing side lengths in right triangles.",
 videoId:null,videoSearch:"Pythagorean theorem",
 points:["Identify the hypotenuse","Substitute into a²+b²=c²","Solve for the missing side"],
 questions:[
  q("In a right triangle, which side is c?",["Either leg","The hypotenuse","The shortest side","The vertical side"],1,"c is the hypotenuse, opposite the right angle."),
  q("Find c when a=3 and b=4.",["5","6","7","25"],0,"3²+4²=9+16=25, so c=5."),
  q("Find c when a=5 and b=12.",["13","14","15","17"],0,"25+144=169, and √169=13."),
  q("Find a when c=10 and b=6.",["4","6","8","16"],2,"a²=100−36=64, so a=8."),
  q("Which equation is the Pythagorean theorem?",["a+b=c","a²+b²=c²","2a+2b=c","ab=c²"],1,"The squares of the legs add to the square of the hypotenuse."),
  q("Which set forms a right triangle?",["2,3,4","6,8,10","5,6,8","4,5,8"],1,"6²+8²=36+64=100=10²."),
  q("Find a leg when c=13 and the other leg is 5.",["8","10","12","18"],2,"13²−5²=169−25=144, so the leg is 12."),
  q("The hypotenuse is always...",["Opposite the right angle","Next to the smallest angle","A vertical side","The shortest side"],0,"It lies opposite the 90° angle."),
  q("A ladder is 5 ft long and its base is 3 ft from a wall. How high does it reach?",["2 ft","3 ft","4 ft","8 ft"],2,"h²=25−9=16, so h=4."),
  q("Can the Pythagorean theorem be used directly on any triangle?",["Yes","Only right triangles","Only equilateral triangles","Only isosceles triangles"],1,"The theorem applies to right triangles.")
 ]
},
{
 id:"special-right-triangles",course:"Right Triangles",order:2,
 title:"30-60-90 and 45-45-90 Triangles",category:"Geometry",icon:"45°",
 description:"Use special side ratios to solve 30-60-90 and 45-45-90 triangles.",
 videoId:"mhuo9IDBn30",
 points:["Recognize each special triangle","Use x:x√3:2x","Use x:x:x√2"],
 questions:[
  q("What is the side ratio of a 45-45-90 triangle?",["1:1:√2","1:√3:2","1:2:3","√2:√3:2"],0,"The legs are equal and the hypotenuse is leg×√2."),
  q("What is the side ratio of a 30-60-90 triangle?",["1:1:√2","1:√3:2","1:2:3","√2:√3:2"],1,"Short leg : long leg : hypotenuse = 1:√3:2."),
  q("A 45-45-90 triangle has leg 6. Find the hypotenuse.",["6√2","12","3√2","6√3"],0,"Hypotenuse = leg√2."),
  q("A 45-45-90 triangle has hypotenuse 10√2. Find a leg.",["5","10","20","10√2"],1,"Divide by √2 to get 10."),
  q("A 30-60-90 triangle has short leg 4. Find the hypotenuse.",["4√3","8","2","8√3"],1,"The hypotenuse is twice the short leg."),
  q("A 30-60-90 triangle has short leg 5. Find the long leg.",["10","5√2","5√3","15"],2,"Long leg = short leg×√3."),
  q("A 30-60-90 triangle has hypotenuse 18. Find the short leg.",["6","9","9√3","18√3"],1,"Short leg is half the hypotenuse."),
  q("Which angle is opposite the shortest side in a 30-60-90 triangle?",["30°","45°","60°","90°"],0,"The shortest side is opposite the smallest angle."),
  q("A square has side 7. What is its diagonal?",["7","14","7√2","7√3"],2,"The diagonal creates a 45-45-90 triangle."),
  q("If the long leg of a 30-60-90 triangle is 6√3, the short leg is...",["3","6","12","18"],1,"x√3=6√3, so x=6.")
 ]
},
{
 id:"mean-mode",course:"Statistics",order:1,
 title:"Mean and Mode",category:"Statistics",icon:"x̄",
 description:"Calculate the mean and identify the mode of a data set.",
 videoId:"OddsI2AcStY",
 points:["Add and divide to find mean","Count repeated values","Identify when there is no mode"],
 questions:[
  q("Find the mean of 2,4,6.",["3","4","5","6"],1,"(2+4+6)÷3=4."),
  q("Find the mode of 1,2,2,3.",["1","2","3","No mode"],1,"2 appears most often."),
  q("Find the mean of 5,7,9,11.",["7","8","9","10"],1,"32÷4=8."),
  q("Find the mode of 4,4,5,5,6.",["4 only","5 only","4 and 5","No mode"],2,"Both 4 and 5 occur twice."),
  q("A data set has no repeated values. Its mode is...",["0","The first number","No mode","The mean"],2,"There is no most frequent value."),
  q("Find the mean of 10,10,20,20.",["10","15","20","60"],1,"60÷4=15."),
  q("What should you divide by when finding mean?",["The largest value","The number of values","The mode","The range"],1,"Mean = sum ÷ count."),
  q("Find the mode of 3,7,7,7,9.",["3","7","9","No mode"],1,"7 appears three times."),
  q("Find the missing value if the mean of 4,6,x is 6.",["6","8","10","12"],1,"The total must be 18, so x=8."),
  q("Which measure means the most frequent value?",["Mean","Median","Mode","Range"],2,"Mode is the value appearing most often.")
 ]
},
{
 id:"median-range",course:"Statistics",order:2,
 title:"Median and Range",category:"Statistics",icon:"↔",
 description:"Order data to find its middle value and calculate its range.",
 videoId:"xeAaktkZMZA",
 points:["Order values first","Find the middle value","Subtract minimum from maximum"],
 questions:[
  q("Find the median of 1,3,5.",["1","3","4","5"],1,"3 is the middle value."),
  q("Find the range of 2,6,9.",["3","7","9","11"],1,"9−2=7."),
  q("Find the median of 2,4,6,8.",["4","5","6","10"],1,"Average the middle values: (4+6)÷2=5."),
  q("Find the range of 10,3,7,15.",["5","8","12","18"],2,"15−3=12."),
  q("What must you do before finding the median?",["Add all values","Order the values","Find the mode","Multiply the endpoints"],1,"The data must be arranged from least to greatest."),
  q("Find the median of 9,1,5,3,7.",["3","5","7","9"],1,"Ordered: 1,3,5,7,9."),
  q("If maximum=24 and minimum=9, range equals...",["15","16","33","216"],0,"24−9=15."),
  q("Find the median of 1,2,8,10,12,14.",["8","9","10","11"],1,"Average 8 and 10 to get 9."),
  q("Which measure describes spread using largest minus smallest?",["Mean","Median","Mode","Range"],3,"Range measures the distance from minimum to maximum."),
  q("The range of 5,5,5,5 is...",["0","5","10","20"],0,"Maximum and minimum are both 5.")
 ]
},
{
 id:"fractions-add-subtract",course:"Fractions",order:1,
 title:"Adding and Subtracting Fractions",category:"Fractions",icon:"+/−",
 description:"Add and subtract fractions with like and unlike denominators.",
 videoId:"d9Mfc9_uH6U",
 points:["Find a common denominator","Rewrite equivalent fractions","Add or subtract numerators"],
 questions:[
  q("1/5+2/5=",["3/5","3/10","2/25","1/5"],0,"With equal denominators, add the numerators."),
  q("4/7−1/7=",["3/7","3/14","5/7","1/7"],0,"Subtract the numerators."),
  q("1/2+1/3=",["2/5","1/5","5/6","2/6"],2,"Use denominator 6: 3/6+2/6=5/6."),
  q("3/4−1/2=",["1/4","2/4","1/2","3/2"],0,"1/2=2/4, so 3/4−2/4=1/4."),
  q("2/3+1/6=",["3/9","1/2","5/6","3/6"],2,"2/3=4/6, then add 1/6."),
  q("5/8−1/4=",["4/4","3/8","1/2","4/8"],1,"1/4=2/8, so 5/8−2/8=3/8."),
  q("The least common denominator of 1/4 and 1/6 is...",["10","12","24","2"],1,"12 is the least common multiple of 4 and 6."),
  q("1/3+1/3=",["1/6","2/3","2/6","1"],1,"Add numerators and keep denominator 3."),
  q("7/10−3/5=",["1/10","2/10","4/5","1/5"],0,"3/5=6/10, leaving 1/10."),
  q("2/9+4/9=",["6/18","2/3","6/9 only","Both 2/3 and 6/9"],3,"6/9 simplifies to 2/3.")
 ]
},
{
 id:"fractions-multiply-divide",course:"Fractions",order:2,
 title:"Multiplying and Dividing Fractions",category:"Fractions",icon:"×/÷",
 description:"Multiply fractions and divide by using the reciprocal.",
 videoId:null,videoSearch:"How to multiply and divide fractions",
 points:["Multiply straight across","Keep-change-flip for division","Simplify the result"],
 questions:[
  q("2/3×3/5=",["6/15","2/5","Both are equivalent","5/6"],2,"6/15 simplifies to 2/5."),
  q("1/2×4/7=",["4/14","2/7","Both are equivalent","5/9"],2,"4/14 simplifies to 2/7."),
  q("3/4÷2/5=",["6/20","15/8","8/15","5/6"],1,"Multiply 3/4 by 5/2."),
  q("What is the reciprocal of 3/7?",["3/7","7/3","-3/7","4/8"],1,"Flip numerator and denominator."),
  q("5/6×3/10=",["15/60","1/4","Both are equivalent","8/16"],2,"15/60 simplifies to 1/4."),
  q("2/3÷4/9=",["8/27","3/2","1/6","2/3"],1,"2/3×9/4=18/12=3/2."),
  q("To divide fractions, you...",["Add denominators","Use the reciprocal of the second fraction","Flip both fractions","Subtract numerators"],1,"Keep the first, change division to multiplication, flip the second."),
  q("7/8×4/7=",["1/2","28/56","Both are equivalent","11/15"],2,"Cancel 7 and simplify 4/8."),
  q("3/5÷3=",["9/5","1/5","3/15 only","5"],1,"3=3/1, so 3/5×1/3=1/5."),
  q("4×2/3=",["6/4","8/3","2/7","8/12"],1,"Write 4 as 4/1 and multiply.")
 ]
},
{
 id:"fractions-simplify",course:"Fractions",order:3,
 title:"Simplifying Fractions",category:"Fractions",icon:"↓",
 description:"Reduce fractions to lowest terms using common factors.",
 videoId:"OkKvWRVivOU",
 points:["Find a common factor","Divide numerator and denominator","Check that no common factor remains"],
 questions:[
  q("Simplify 6/8.",["3/4","2/4","6/4","1/2"],0,"Divide top and bottom by 2."),
  q("Simplify 10/15.",["2/3","5/10","1/5","3/2"],0,"Divide by 5."),
  q("Simplify 12/18.",["6/9","2/3","3/4","4/6 only"],1,"Divide by the greatest common factor 6."),
  q("Which fraction is already simplest?",["4/6","5/7","8/12","9/15"],1,"5 and 7 share no factor besides 1."),
  q("Simplify 20/30.",["2/3","10/15 only","4/5","3/2"],0,"Divide by 10."),
  q("The greatest common factor of 16 and 24 is...",["2","4","8","12"],2,"8 divides both numbers."),
  q("Simplify 14/49.",["2/7","7/14","1/3","2/5"],0,"Divide by 7."),
  q("Simplify 18/24.",["3/4","6/8 only","2/3","4/5"],0,"Divide by 6."),
  q("A fraction is in simplest form when...",["The numerator is smaller","The denominator is even","Top and bottom share no factor greater than 1","It equals a whole number"],2,"No further common division is possible."),
  q("Simplify 45/60.",["3/4","9/12 only","4/3","5/6"],0,"Divide by 15.")
 ]
},
{
 id:"volume-cubes-cuboids",course:"Volume and Surface Area",order:1,
 title:"Cubes and Cuboids",category:"Geometry",icon:"▣",
 description:"Find volume and surface area of cubes and rectangular prisms.",
 videoId:null,videoSearch:"cubes cuboids volume surface area",
 points:["Use V=lwh","Use V=s³ for cubes","Add all six faces for surface area"],
 questions:[
  q("Find the volume of a cuboid 3×4×5.",["12","20","60","120"],2,"V=lwh=3×4×5=60."),
  q("Find the volume of a cube with side 4.",["16","24","64","96"],2,"V=4³=64."),
  q("Surface area of a cube with side 3?",["9","18","27","54"],3,"6s²=6×9=54."),
  q("Volume is measured in...",["units","square units","cubic units","degrees"],2,"Volume is three-dimensional."),
  q("Surface area is measured in...",["units","square units","cubic units","liters"],1,"Area uses squared units."),
  q("Find volume of a cuboid 2×6×7.",["42","84","96","112"],1,"2×6×7=84."),
  q("A cube has volume 125. Its side length is...",["4","5","25","125"],1,"∛125=5."),
  q("Find surface area of a cuboid with l=4,w=3,h=2.",["24","26","52","48"],2,"2(lw+lh+wh)=2(12+8+6)=52."),
  q("Which formula gives cube volume?",["6s²","s³","l+w+h","2πr"],1,"Multiply the side three times."),
  q("A cuboid is also called a...",["Sphere","Rectangular prism","Cone","Pyramid only"],1,"Cuboid and rectangular prism describe the same solid.")
 ]
},
{
 id:"volume-spheres",course:"Volume and Surface Area",order:3,
 title:"Spheres",category:"Geometry",icon:"●",
 description:"Calculate the volume and surface area of spheres.",
 videoId:null,videoSearch:"volume surface area sphere",
 points:["Use V=4/3πr³","Use SA=4πr²","Convert diameter to radius"],
 questions:[
  q("What is the volume formula for a sphere?",["4πr²","4/3πr³","πr²h","1/3πr²h"],1,"Sphere volume is 4/3πr³."),
  q("What is the surface area formula for a sphere?",["4πr²","4/3πr³","2πrh","πr²"],0,"Sphere surface area is 4πr²."),
  q("Find the volume of a sphere with r=3.",["12π","36π","27π","108π"],1,"4/3π(27)=36π."),
  q("Find surface area of a sphere with r=3.",["9π","18π","36π","108π"],2,"4π(9)=36π."),
  q("A sphere has diameter 10. Its radius is...",["2","5","10","20"],1,"Radius is half the diameter."),
  q("Find volume when r=2.",["8π","16/3π","32/3π","16π"],2,"4/3π(8)=32/3π."),
  q("Find surface area when r=5.",["20π","25π","50π","100π"],3,"4π(25)=100π."),
  q("If radius doubles, surface area is multiplied by...",["2","4","6","8"],1,"Surface area depends on r²."),
  q("If radius doubles, volume is multiplied by...",["2","4","6","8"],3,"Volume depends on r³."),
  q("Which measurement goes from one side through the center to the other?",["Radius","Diameter","Circumference only","Height"],1,"The diameter passes through the center.")
 ]
}


];


function q(text,options,answer,explanation){return{text,options,answer,explanation};}

const courseInfo={
"Quadratics":["x²","Factoring, vertex form, and quadratic formula"],
"Systems of Equations":["{ }","Equal values, substitution, and elimination"],
"Radicals":["√","Basic and higher roots"],
"Scientific Notation":["10ⁿ","Large and small numbers"],
"Coordinate Geometry":["↗","Distance on the coordinate plane"],
"Right Triangles":["△","Pythagorean theorem and special right triangles"],
"Statistics":["x̄","Mean, mode, median, and range"],
"Fractions":["½","Add, subtract, multiply, divide, and simplify"],
"Volume and Surface Area":["▣","Cubes, cuboids, cones, cylinders, and spheres"]
};

const badges=[
{id:"first",icon:"🌱",name:"First Step",desc:"Pass your first lesson",test:s=>s.passed.length>=1},
{id:"five",icon:"🎉",name:"High Five",desc:"Pass five lessons",test:s=>s.passed.length>=5},
{id:"ten",icon:"🚀",name:"Double Digits",desc:"Pass ten lessons",test:s=>s.passed.length>=10},
{id:"all",icon:"👑",name:"Skill Spring Champion",desc:"Pass all 20 lessons",test:s=>s.passed.length>=lessons.length},
{id:"perfect",icon:"💯",name:"Perfect Score",desc:"Earn your first gold medal",test:s=>goldCount(s)>=1},
{id:"gold5",icon:"🥇",name:"Gold Collector",desc:"Earn five gold medals",test:s=>goldCount(s)>=5},
{id:"xp100",icon:"⚡",name:"Power Learner",desc:"Earn 100 XP",test:s=>s.xp>=100},
{id:"xp500",icon:"🌟",name:"Super Scholar",desc:"Earn 500 XP",test:s=>s.xp>=500},
{id:"streak3",icon:"🔥",name:"On Fire",desc:"Build a 3-day streak",test:s=>s.streak>=3},
{id:"streak7",icon:"🌋",name:"Unstoppable",desc:"Build a 7-day streak",test:s=>s.streak>=7},
{id:"quadratics",icon:"🧮",name:"Quadratics Master",desc:"Complete the Quadratics course",test:s=>courseComplete("Quadratics",s)},
{id:"fractions",icon:"➗",name:"Fraction Expert",desc:"Complete the Fractions course",test:s=>courseComplete("Fractions",s)},
{id:"geometry",icon:"📐",name:"Geometry Explorer",desc:"Complete two geometry courses",test:s=>["Right Triangles","Volume and Surface Area","Coordinate Geometry"].filter(c=>courseComplete(c,s)).length>=2}
];

const shopItems=[
{id:"avatar-owl",type:"avatar",icon:"🦉",name:"Owl",price:0},
{id:"avatar-fox",type:"avatar",icon:"🦊",name:"Fox",price:60},
{id:"avatar-dragon",type:"avatar",icon:"🐉",name:"Dragon",price:100},
{id:"avatar-robot",type:"avatar",icon:"🤖",name:"Robot",price:140},
{id:"avatar-cat",type:"avatar",icon:"🐱",name:"Cat",price:80},
{id:"theme-spring",type:"theme",icon:"💜",name:"Spring Purple",value:"spring",price:0},
{id:"theme-ocean",type:"theme",icon:"🌊",name:"Ocean Blue",value:"ocean",price:90},
{id:"theme-forest",type:"theme",icon:"🌲",name:"Forest Green",value:"forest",price:90},
{id:"theme-sunset",type:"theme",icon:"🌅",name:"Sunset Orange",value:"sunset",price:110},
{id:"theme-midnight",type:"theme",icon:"🌙",name:"Midnight",value:"midnight",price:150}
];

const defaultState={
xp:0,coins:0,streak:0,longestStreak:0,lastStudy:null,passed:[],best:{},attempts:{},medals:{},
daily:{date:null,xp:0,questions:0,lesson:false},activity:[],owned:["avatar-owl","theme-spring"],
avatar:"🦉",theme:"spring",petName:"Sprout",openedChests:0,settings:{shuffle:true,sound:true,reducedMotion:false}
};

let state=Object.assign({},defaultState,JSON.parse(localStorage.getItem("skillSpringState")||"{}"));
state.daily=Object.assign({},defaultState.daily,state.daily||{});
state.passed=state.passed||[];state.best=state.best||{};state.attempts=state.attempts||{};state.medals=state.medals||{};
state.activity=state.activity||[];state.owned=state.owned||["avatar-owl","theme-spring"];state.settings=Object.assign({shuffle:true,sound:true,reducedMotion:false},state.settings||{});
let activeLesson=null,questionIndex=0,selectedAnswer=null,quizScore=0,answered=false,wrongAnswers=0,badgesBefore=[],quizQuestions=[],mistakes=[],quizMode="mastery",deferredInstallPrompt=null;

function saveState(){localStorage.setItem("skillSpringState",JSON.stringify(state));}
function today(){return new Date().toISOString().slice(0,10);}
function courseLessons(name){return lessons.filter(l=>l.course===name).sort((a,b)=>a.order-b.order);}
function courseComplete(name,s=state){const items=courseLessons(name);return items.length>0&&items.every(l=>s.passed.includes(l.id));}
function goldCount(s=state){return Object.values(s.medals||{}).filter(m=>m==="gold").length;}
function currentLevel(){return Math.floor(state.xp/100)+1;}
function levelProgress(){return state.xp%100;}
function petLevel(){return Math.floor(state.xp/75)+1;}
function medalForScore(score,total=10){const pct=score/total;return pct===1?"gold":pct>=.9?"silver":pct>=.7?"bronze":null;}
function medalLabel(m){return m==="gold"?"🥇 Gold":m==="silver"?"🥈 Silver":m==="bronze"?"🥉 Bronze":"No medal";}
function ensureDaily(){
 if(state.daily.date!==today())state.daily={date:today(),xp:0,questions:0,lesson:false};
 if(state.lastStudy){
  const diff=Math.round((new Date(today()+"T12:00:00")-new Date(state.lastStudy+"T12:00:00"))/86400000);
  if(diff>1)state.streak=0;
 }
 saveState();
}
function isUnlocked(lesson){
 const items=courseLessons(lesson.course),i=items.findIndex(l=>l.id===lesson.id);
 return i===0||state.passed.includes(items[i-1].id)||state.passed.includes(lesson.id);
}
function nextLessonForCourse(course){
 return courseLessons(course).find(l=>isUnlocked(l)&&!state.passed.includes(l.id))||courseLessons(course)[0];
}
function showView(id){
 ["dashboard-view","courses-view","lesson-view","quiz-view","results-view","rewards-view","profile-view","settings-view"].forEach(v=>document.getElementById(v).classList.toggle("hidden",v!==id));
 window.scrollTo(0,0);
}
function applyTheme(){
 document.body.dataset.theme=state.theme||"spring";
 document.body.classList.toggle("reduced-motion",!!state.settings.reducedMotion);
}
function updateHeader(){
 document.getElementById("header-streak").textContent=state.streak;
 document.getElementById("header-coins").textContent=state.coins;
 document.getElementById("header-avatar").textContent=state.avatar;
}
function showDashboard(){ensureDaily();applyTheme();renderDashboard();showView("dashboard-view");}
function renderDashboard(){
 updateHeader();
 document.getElementById("dashboard-level").textContent=currentLevel();
 document.getElementById("level-xp-label").textContent=`${levelProgress()} / 100 XP`;
 document.getElementById("today-label").textContent=new Date().toLocaleDateString(undefined,{weekday:"long",month:"short",day:"numeric"});
 const xpPct=Math.min(100,state.daily.xp/30*100),qPct=Math.min(100,state.daily.questions/10*100);
 document.getElementById("xp-goal-text").textContent=`${Math.min(state.daily.xp,30)} / 30 XP`;
 document.getElementById("xp-goal-bar").style.width=xpPct+"%";
 document.getElementById("question-goal-text").textContent=`${Math.min(state.daily.questions,10)} / 10`;
 document.getElementById("question-goal-bar").style.width=qPct+"%";
 document.getElementById("streak-goal-text").textContent=state.daily.lesson?"Goal complete!":"Complete one lesson today";
 document.getElementById("streak-goal-bar").style.width=state.daily.lesson?"100%":"0%";
 const nextCards=Object.keys(courseInfo).map(c=>nextLessonForCourse(c)).filter(Boolean).slice(0,4);
 document.getElementById("continue-grid").innerHTML=nextCards.map(l=>`<article class="goal-card continue-card"><div class="continue-icon">${l.icon}</div><div><h3>${l.title}</h3><p>${l.course}</p></div><button class="primary-button" onclick="openLesson('${l.id}')">${state.passed.includes(l.id)?"Review":"Continue"}</button></article>`).join("");
 document.getElementById("course-overview").innerHTML=Object.entries(courseInfo).map(([c,info])=>{
  const total=courseLessons(c).length,done=courseLessons(c).filter(l=>state.passed.includes(l.id)).length,pct=total?done/total*100:0;
  return `<article class="overview-row"><div class="overview-icon">${info[0]}</div><div><h3>${c}</h3><div class="course-progress"><i style="width:${pct}%"></i></div></div><strong>${done}/${total}</strong></article>`;
 }).join("");
 document.getElementById("pet-display").textContent=state.avatar;
 document.getElementById("pet-name-display").textContent=state.petName;
 document.getElementById("pet-level").textContent=petLevel();
 document.getElementById("pet-progress").style.width=`${state.xp%75/75*100}%`;
 renderWeek();
 const earned=badges.filter(b=>b.test(state));
 document.getElementById("latest-badges").innerHTML=(earned.slice(-4).length?earned.slice(-4):badges.slice(0,4)).map(b=>`<div class="latest-badge ${b.test(state)?"":"locked"}" title="${b.name}">${b.icon}</div>`).join("");
 const available=Math.floor(state.passed.length/5)-state.openedChests;
 const btn=document.getElementById("mystery-button");
 document.getElementById("mystery-text").textContent=available>0?"Your reward is ready!":`${state.passed.length%5}/5 lessons toward the next reward.`;
 btn.disabled=available<=0;btn.textContent=available>0?"Open reward":"Locked";
}
function renderWeek(){
 const names=["S","M","T","W","T","F","S"],now=new Date(),html=[];
 for(let i=6;i>=0;i--){const d=new Date(now);d.setDate(now.getDate()-i);const key=d.toISOString().slice(0,10);html.push(`<div class="day-dot ${state.activity.includes(key)?"done":""}"><span>${names[d.getDay()]}</span><i>${state.activity.includes(key)?"✓":"•"}</i></div>`);}
 document.getElementById("week-strip").innerHTML=html.join("");
}
function continueLearning(){
 const l=Object.keys(courseInfo).map(c=>nextLessonForCourse(c)).find(l=>l&&!state.passed.includes(l.id))||lessons[0];openLesson(l.id);
}
function showCourses(){renderCourses();showView("courses-view");}
function renderCourses(){
 updateHeader();const term=(document.getElementById("course-search")?.value||"").toLowerCase();
 document.getElementById("courses-container").innerHTML=Object.entries(courseInfo).filter(([c,info])=>(c+" "+info[1]+" "+courseLessons(c).map(l=>l.title).join(" ")).toLowerCase().includes(term)).map(([c,info])=>{
  const items=courseLessons(c),done=items.filter(l=>state.passed.includes(l.id)).length;
  return `<section class="course-card"><button class="course-header" onclick="this.parentElement.classList.toggle('open')"><div class="course-icon">${info[0]}</div><div class="course-title"><h3>${c}</h3><p>${info[1]}</p></div><div class="course-count"><strong>${done}/${items.length}</strong><small>completed</small></div><span class="chevron">⌄</span></button><div class="course-lessons">${items.map((l,i)=>{
   const unlocked=isUnlocked(l),passed=state.passed.includes(l.id),medal=state.medals[l.id];
   return `<div class="lesson-row ${passed?"passed":unlocked?"available":""}"><div class="lesson-step">${passed?"✓":unlocked?i+1:"🔒"}</div><div><h4>${l.title}</h4><p>${l.description}</p></div><span class="medal-chip">${medalLabel(medal)}</span>${unlocked?`<button class="${passed?"secondary-button":"primary-button"}" onclick="openLesson('${l.id}')">${passed?"Review":"Start"}</button>`:`<span class="locked-text">Complete lesson ${i}</span>`}</div>`;
  }).join("")}</div></section>`;
 }).join("");
}
function openLesson(id){
 activeLesson=lessons.find(l=>l.id===id);if(!activeLesson||!isUnlocked(activeLesson))return;
 document.getElementById("lesson-course").textContent=activeLesson.course;
 document.getElementById("lesson-title").textContent=activeLesson.title;
 document.getElementById("lesson-description").textContent=activeLesson.description;
 document.getElementById("lesson-icon").textContent=activeLesson.icon;
 document.getElementById("lesson-points").innerHTML=activeLesson.points.map(p=>`<li>${p}</li>`).join("");
 document.getElementById("lesson-medal").textContent=medalLabel(state.medals[activeLesson.id]);
 document.getElementById("lesson-best").textContent=state.best[activeLesson.id]===undefined?"Not attempted":`${state.best[activeLesson.id]}/${quizQuestions.length} • ${medalLabel(state.medals[activeLesson.id])}`;
 const v=document.getElementById("lesson-video");
 if(activeLesson.videoId)v.innerHTML=`<div class="video-shell"><iframe src="https://www.youtube.com/embed/${activeLesson.videoId}?rel=0&playsinline=1" title="${activeLesson.title}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><p class="video-help">If playback is blocked, <a href="https://youtu.be/${activeLesson.videoId}" target="_blank" rel="noopener">open it on YouTube</a>.</p>`;
 else v.innerHTML=`<div class="video-placeholder"><h3>Video connection pending</h3><p>The lesson and quiz are ready. Use this button to find the matching video on the channel.</p><a class="primary-button" target="_blank" href="https://www.youtube.com/@s_math-w4l/search?query=${encodeURIComponent(activeLesson.videoSearch||activeLesson.title)}">Find video</a></div>`;
 showView("lesson-view");
}
function startQuiz(){
 quizMode="mastery";questionIndex=0;selectedAnswer=null;quizScore=0;answered=false;wrongAnswers=0;mistakes=[];
 quizQuestions=activeLesson.questions.map((question,originalIndex)=>({question,originalIndex}));
 if(state.settings.shuffle)quizQuestions=shuffleArray(quizQuestions);
 badgesBefore=badges.filter(b=>b.test(state)).map(b=>b.id);
 state.attempts[activeLesson.id]=(state.attempts[activeLesson.id]||0)+1;saveState();
 document.getElementById("quiz-topic").textContent=activeLesson.title;
 document.getElementById("quiz-mode-label").textContent="Mastery quiz";
 showView("quiz-view");renderQuestion();
}
function startMistakeReview(){
 if(!mistakes.length)return;
 quizMode="review";questionIndex=0;selectedAnswer=null;quizScore=0;answered=false;wrongAnswers=0;
 quizQuestions=mistakes.map(m=>({question:m.question,originalIndex:m.originalIndex}));
 document.getElementById("quiz-topic").textContent=activeLesson.title;
 document.getElementById("quiz-mode-label").textContent="Mistake review";
 showView("quiz-view");renderQuestion();
}
function shuffleArray(items){
 const copy=[...items];
 for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}
 return copy;
}
function renderQuestion(){
 const qn=quizQuestions[questionIndex].question;selectedAnswer=null;answered=false;
 document.getElementById("question-count").textContent=`Question ${questionIndex+1} of ${quizQuestions.length}`;
 document.getElementById("question-text").textContent=qn.text;
 document.getElementById("quiz-progress-bar").style.width=`${(questionIndex+1)/quizQuestions.length*100}%`;
 document.getElementById("quiz-hearts").textContent=["♥","♥","♥"].map((h,i)=>i<Math.max(0,3-wrongAnswers)?h:"♡").join(" ");
 document.getElementById("answer-options").innerHTML=qn.options.map((o,i)=>`<button class="answer-option" onclick="selectAnswer(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
 document.getElementById("quiz-hint").className="hint-box hidden";document.getElementById("hint-button").className="secondary-button full hint-button";document.getElementById("quiz-feedback").className="feedback hidden";
 document.getElementById("check-answer-button").className="primary-button full";
 document.getElementById("continue-button").className="primary-button full hidden";
 document.getElementById("continue-button").textContent=questionIndex===quizQuestions.length-1?"See results":"Continue";
}
function selectAnswer(i){if(answered)return;selectedAnswer=i;document.querySelectorAll(".answer-option").forEach((b,j)=>b.classList.toggle("selected",i===j));}
function checkAnswer(){
 if(selectedAnswer===null){const f=document.getElementById("quiz-feedback");f.textContent="Choose an answer first.";f.className="feedback bad";return;}
 answered=true;const item=quizQuestions[questionIndex],qn=item.question,buttons=[...document.querySelectorAll(".answer-option")];
 buttons[qn.answer].classList.add("correct");
 if(selectedAnswer===qn.answer){quizScore++;playSound("correct");}
 else{buttons[selectedAnswer].classList.add("wrong");wrongAnswers++;mistakes.push(item);playSound("wrong");}
 state.daily.questions++;saveState();
 const f=document.getElementById("quiz-feedback");f.innerHTML=`<strong>${selectedAnswer===qn.answer?"Correct!":"Not quite."}</strong> ${qn.explanation}`;f.className=`feedback ${selectedAnswer===qn.answer?"good":"bad"}`;
 document.getElementById("hint-button").className="hidden";document.getElementById("check-answer-button").className="hidden";document.getElementById("continue-button").className="primary-button full";
}
function nextQuestion(){if(questionIndex<quizQuestions.length-1){questionIndex++;renderQuestion();}else finishQuiz();}
function finishQuiz(){
 if(quizMode==="review"){
  const total=quizQuestions.length,passed=quizScore===total;
  document.getElementById("results-emoji").textContent=passed?"✅":"🔁";
  document.getElementById("results-title").textContent=passed?"Mistakes mastered!":"Review complete";
  document.getElementById("results-score").textContent=`${quizScore}/${total}`;
  document.getElementById("results-medal").textContent="Practice review";
  document.getElementById("results-message").textContent=passed?"You corrected every question you previously missed.":"Try the full lesson quiz again when you are ready.";
  document.getElementById("results-xp").textContent="+0";
  document.getElementById("results-coins").textContent="+0";
  document.getElementById("results-streak").textContent=`${state.streak} day${state.streak===1?"":"s"}`;
  document.getElementById("new-badge-alert").className="new-badge hidden";
  document.getElementById("review-mistakes-button").className="hidden";
  showView("results-view");return;
 }
 const total=quizQuestions.length,passed=quizScore/total>=.7,firstPass=passed&&!state.passed.includes(activeLesson.id),firstAttempt=(state.attempts[activeLesson.id]||0)===1;
 let xpEarned=passed?25:5,coinsEarned=passed?10:2;
 if(firstPass&&firstAttempt)xpEarned+=20;
 if(quizScore===total){xpEarned+=15;coinsEarned+=10;}
 if(!state.daily.lesson&&passed){xpEarned+=10;state.daily.lesson=true;}
 const newMedal=medalForScore(quizScore,total),oldMedal=state.medals[activeLesson.id],rank={null:0,bronze:1,silver:2,gold:3};
 if(newMedal&&rank[newMedal]>rank[oldMedal||"null"])state.medals[activeLesson.id]=newMedal;
 state.best[activeLesson.id]=Math.max(state.best[activeLesson.id]||0,quizScore);
 if(firstPass)state.passed.push(activeLesson.id);
 state.xp+=xpEarned;state.coins+=coinsEarned;state.daily.xp+=xpEarned;
 if(passed){
  const t=today();
  if(state.lastStudy!==t){if(!state.lastStudy)state.streak=1;else{const diff=Math.round((new Date(t+"T12:00:00")-new Date(state.lastStudy+"T12:00:00"))/86400000);state.streak=diff===1?state.streak+1:1;}state.lastStudy=t;}
  state.longestStreak=Math.max(state.longestStreak||0,state.streak);if(!state.activity.includes(t))state.activity.push(t);
 }
 saveState();updateHeader();
 document.getElementById("results-emoji").textContent=passed?"🎉":"📚";
 document.getElementById("results-title").textContent=passed?"Lesson complete!":"Keep practicing!";
 document.getElementById("results-score").textContent=`${quizScore}/${total}`;
 document.getElementById("results-medal").textContent=medalLabel(newMedal);
 document.getElementById("results-message").textContent=passed?(firstPass?"You unlocked the next lesson in this course.":"You improved your mastery and rewards."):"Score at least 7/10 to pass this lesson.";
 document.getElementById("results-xp").textContent=`+${xpEarned}`;
 document.getElementById("results-coins").textContent=`+${coinsEarned}`;
 document.getElementById("results-streak").textContent=`${state.streak} day${state.streak===1?"":"s"}`;
 const newly=badges.filter(b=>b.test(state)&&!badgesBefore.includes(b.id));
 const alert=document.getElementById("new-badge-alert");
 if(newly.length){alert.className="new-badge";alert.innerHTML=`<strong>New badge${newly.length>1?"s":""}!</strong> ${newly.map(b=>`${b.icon} ${b.name}`).join(" • ")}`;}else alert.className="new-badge hidden";
 const reviewButton=document.getElementById("review-mistakes-button");
 reviewButton.className=mistakes.length?"secondary-button":"secondary-button hidden";
 if(passed){playSound("reward");launchConfetti();}
 showView("results-view");
}
function exitQuiz(){openLesson(activeLesson.id);}
function showRewards(){renderRewards();showView("rewards-view");}
function showRewardTab(tab,button){
 document.querySelectorAll(".reward-tabs button").forEach(b=>b.classList.remove("active"));button.classList.add("active");
 ["badges","shop","medals"].forEach(t=>document.getElementById(`${t}-tab`).classList.toggle("hidden",t!==tab));
}
function renderRewards(){
 updateHeader();
 document.getElementById("badges-tab").innerHTML=`<div class="badge-grid">${badges.map(b=>`<article class="panel badge-card ${b.test(state)?"":"locked"}"><div class="badge-icon">${b.icon}</div><h3>${b.name}</h3><p>${b.desc}</p><strong>${b.test(state)?"Earned":"Locked"}</strong></article>`).join("")}</div>`;
 document.getElementById("shop-tab").innerHTML=`<div class="shop-grid">${shopItems.map(i=>{
  const owned=state.owned.includes(i.id),equipped=i.type==="avatar"?state.avatar===i.icon:state.theme===(i.value||"spring");
  return `<article class="panel shop-card ${equipped?"equipped":""}"><div class="shop-icon">${i.icon}</div><h3>${i.name}</h3><p>${i.type==="avatar"?"Math companion":"App color theme"}</p><span class="price">${i.price} 🪙</span><button class="${owned?"secondary-button":"primary-button"} full" onclick="buyOrEquip('${i.id}')">${equipped?"Equipped":owned?"Equip":"Unlock"}</button></article>`;
 }).join("")}</div>`;
 document.getElementById("medals-tab").innerHTML=`<div class="medal-grid">${lessons.map(l=>`<article class="panel medal-card"><div class="badge-icon">${state.medals[l.id]==="gold"?"🥇":state.medals[l.id]==="silver"?"🥈":state.medals[l.id]==="bronze"?"🥉":"⚪"}</div><h3>${l.title}</h3><p>${l.course}</p><strong>${medalLabel(state.medals[l.id])}</strong></article>`).join("")}</div>`;
}
function buyOrEquip(id){
 const item=shopItems.find(i=>i.id===id),owned=state.owned.includes(id);
 if(!owned){if(state.coins<item.price){toast("You need more coins to unlock this.");return;}state.coins-=item.price;state.owned.push(id);}
 if(item.type==="avatar")state.avatar=item.icon;else state.theme=item.value;
 saveState();applyTheme();updateHeader();renderRewards();toast(`${item.name} equipped!`);
}
function openMysteryReward(){
 const available=Math.floor(state.passed.length/5)-state.openedChests;if(available<=0)return;
 const rewards=[{coins:25,text:"25 bonus coins!"},{xp:40,text:"40 bonus XP!"},{coins:40,text:"40 bonus coins!"},{xp:25,coins:15,text:"25 XP and 15 coins!"}];
 const r=rewards[Math.floor(Math.random()*rewards.length)];state.xp+=r.xp||0;state.coins+=r.coins||0;state.openedChests++;saveState();renderDashboard();toast(`Mystery reward: ${r.text}`);
}
function showProfile(){
 updateHeader();document.getElementById("profile-avatar").textContent=state.avatar;
 document.getElementById("profile-subtitle").textContent=`Level ${currentLevel()} • ${state.passed.length} of ${lessons.length} lessons completed`;
 document.getElementById("profile-xp").textContent=state.xp;document.getElementById("profile-coins").textContent=state.coins;
 document.getElementById("profile-streak").textContent=state.streak;document.getElementById("profile-lessons").textContent=state.passed.length;
 document.getElementById("profile-gold").textContent=goldCount();document.getElementById("profile-badges").textContent=badges.filter(b=>b.test(state)).length;
 document.getElementById("profile-courses").innerHTML=Object.keys(courseInfo).map(c=>{const items=courseLessons(c),done=items.filter(l=>state.passed.includes(l.id)).length,pct=done/items.length*100;return `<div class="profile-progress-row"><div><strong>${c}</strong><span>${done}/${items.length}</span></div><div class="course-progress"><i style="width:${pct}%"></i></div></div>`}).join("");
 document.getElementById("pet-name-input").value=state.petName;showView("profile-view");
}
function savePetName(){const n=document.getElementById("pet-name-input").value.trim();if(n)state.petName=n;saveState();toast("Pet name saved!");}
function resetProgress(){if(confirm("Reset all Skill Spring Math progress and rewards?")){state=JSON.parse(JSON.stringify(defaultState));saveState();applyTheme();showDashboard();}}
function toast(message){const t=document.getElementById("toast");t.textContent=message;t.className="toast";setTimeout(()=>t.className="toast hidden",2600);}

function showHint(){
 const qn=quizQuestions[questionIndex].question;
 const hint=makeHint(qn);
 const box=document.getElementById("quiz-hint");box.textContent=hint;box.className="hint-box";
 document.getElementById("hint-button").className="hidden";
}
function makeHint(qn){
 const explanation=qn.explanation||"Think through the steps from the lesson.";
 const firstSentence=explanation.split(/[.!?]/)[0];
 return `Hint: ${firstSentence}.`;
}
function playSound(type){
 if(!state.settings.sound)return;
 try{
  const ctx=new (window.AudioContext||window.webkitAudioContext)();
  const osc=ctx.createOscillator(),gain=ctx.createGain();
  osc.connect(gain);gain.connect(ctx.destination);
  const frequencies={correct:660,wrong:220,reward:880};
  osc.frequency.value=frequencies[type]||440;gain.gain.value=.035;
  osc.start();gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.18);osc.stop(ctx.currentTime+.2);
 }catch(e){}
}
function launchConfetti(){
 if(state.settings.reducedMotion)return;
 const canvas=document.getElementById("confetti-canvas"),ctx=canvas.getContext("2d");
 canvas.width=window.innerWidth;canvas.height=window.innerHeight;
 const pieces=Array.from({length:110},()=>({x:Math.random()*canvas.width,y:-20-Math.random()*canvas.height*.3,w:5+Math.random()*8,h:4+Math.random()*6,v:2+Math.random()*5,r:Math.random()*6.28,rv:(Math.random()-.5)*.2}));
 let frames=0;
 function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pieces.forEach((p,i)=>{p.y+=p.v;p.x+=Math.sin(p.r)*1.4;p.r+=p.rv;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=`hsl(${(i*47)%360} 80% 58%)`;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();});
  if(frames++<150)requestAnimationFrame(draw);else ctx.clearRect(0,0,canvas.width,canvas.height);
 }draw();
}
function showSettings(){
 updateHeader();
 document.getElementById("shuffle-setting").checked=!!state.settings.shuffle;
 document.getElementById("sound-setting").checked=!!state.settings.sound;
 document.getElementById("motion-setting").checked=!!state.settings.reducedMotion;
 showView("settings-view");
}
function saveSettings(){
 state.settings.shuffle=document.getElementById("shuffle-setting").checked;
 state.settings.sound=document.getElementById("sound-setting").checked;
 state.settings.reducedMotion=document.getElementById("motion-setting").checked;
 saveState();applyTheme();toast("Settings saved.");
}
function exportProgress(){
 const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download=`skill-spring-math-progress-${today()}.json`;a.click();URL.revokeObjectURL(url);
}
function importProgress(event){
 const file=event.target.files[0];if(!file)return;
 const reader=new FileReader();
 reader.onload=()=>{try{const imported=JSON.parse(reader.result);state=Object.assign({},defaultState,imported);state.settings=Object.assign({},defaultState.settings,state.settings||{});saveState();applyTheme();toast("Progress restored.");showDashboard();}catch(e){toast("That progress file could not be read.");}};
 reader.readAsText(file);
}
function installApp(){
 if(!deferredInstallPrompt){toast("Use your browser menu and choose Install App or Add to Home Screen.");return;}
 deferredInstallPrompt.prompt();deferredInstallPrompt.userChoice.finally(()=>{deferredInstallPrompt=null;document.getElementById("install-button").disabled=true;});
}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;const b=document.getElementById("install-button");if(b){b.disabled=false;b.textContent="Install Skill Spring Math";}});
window.addEventListener("online",()=>document.getElementById("offline-banner").className="offline-banner hidden");
window.addEventListener("offline",()=>document.getElementById("offline-banner").className="offline-banner");
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js").catch(()=>{}));

ensureDaily();applyTheme();showDashboard();

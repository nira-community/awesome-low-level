## Awesome Low Level

A curated collection of resources for learning low-level programming from the ground up, starting with electronics and progressing toward the specialized fields you’re interested in.

---

## Table of Contents

- [Why We Made This ?](#why-we-made-this-)
- [How to Refer ?](#how-to-refer-)
  - [If You're an Absolute Beginner](#if-youre-an-absolute-beginner)
    - [But, You Already Have Some Programming Experience](#but-you-already-have-some-programming-experience)
    - [But, You're Really New to Programming](#but-youre-really-new-to-programming)
      - [1. Start with Basics](#1-start-with-basics)
      - [2. Build your Computer Science Foundation](#2-build-your-computer-science-foundation)
      - [3. Go Deeper with a Structured Path](#3-go-deeper-with-a-structured-path)
  - [If You Have Some Low-Level Experience](#if-you-have-some-low-level-experience)
  - [If You Have High-Level Programming Experience](#if-you-have-high-level-programming-experience)
- [How to Learn ?](#how-to-learn-)
  - [Project-Based Learning](#project-based-learning)
  - [Using AI Tools](#using-ai-tools)
- [What is Low-Level Programming?](#what-is-low-level-programming-)
- [Low-Level Programming vs System Programming](#low-level-programming-vs-system-programming)
- [Why Learning C is Important ?](#why-learning-c-is-important-)
- [C vs C++ in Low-Level Programming](#c-vs-c-in-low-level-programming)
- [Let's Gooo!](#lets-gooo-)
- [Roadmap](#roadmap)
  - [1. Basic Electronics](#1-basic-electronics)
  - [2. Computer Fundamentals](#2-computer-fundamentals)
  - [3. C Programming](#3-c-programming)
  - [4. Practice Data Structures & Algorithms](#4-practice-data-structures--algorithms)
  - [5. Build Small Projects](#5-build-small-projects)
  - [6. Learn Modern Low-Level Languages (Optional)](#6-learn-modern-low-level-languages-optional)
    - [Procedural Languages](#procedural-languages)
      - [C++](#c-)
      - [Rust](#rust-)
      - [Zig](#zig-)
      - [Odin](#odin-)
    - [Non-Procedural Languages](#non-procedural-languages)
      - [Ante](#ante)
      - [Carp](#carp)
      - [Futhark](#futhark)
      - [Forth](#forth)
  - [7. Pick a Specialized Field](#7-pick-a-specialized-field)
    - [Which Field to Pick ?](#which-field-to-pick-)
      - [Following the Language You Like](#following-the-language-you-like)
      - [Following How Close You Want to Be to Hardware](#following-how-close-you-want-to-be-to-hardware)
      - [Following Your Interests](#following-your-interests)
    - [Low-Level Programming Fields](#low-level-programming-fields)
      - [1. Embedded Systems](#1-embedded-systems)
      - [2. Compilers & Interpreters](#3-compilers--interpreters)
      - [3. Operating Systems Development](#4-operating-systems-development)
      - [4. GPGPU & Parallel Computing](#5-gpgpu--parallel-computing)
      - [5. Graphics Programming](#6-graphics-programming)
      - [6. Game Engine Development](#7-game-engine-development)
      - [7. Network Systems Programming](#8-network-systems-programming)
      - [8. Cybersecurity](#9-cybersecurity)
- [Recommended Creators](#recommended-creators)
- [Discord](#discord)
- [License](#license)

---

## Why We Made This ?

We created this megathread mainly to help complete beginners take their first step into low-level programming. Getting started can be confusing when you don't know what to learn, where to start, or what topics actually important. So we made this to give a clear path to follow and help you understand the fundamentals step by step without making things more confusing.

We spent a lot of time going through the resources and picking the ones we think are actually useful and worth your time. This guide is made by people who are passionate about low-level programming and want to make it easier for others to get into it. Whether you're completely new or just don't know what to learn next, we hope this megathread can help you build a good foundation and give you a better idea of where to go next.

---

## How to Refer ?

This megathread is not meant to be a perfect or complete guide. There are probably some topics and resources that we missed, and that's completely fine. In some sections, you will find multiple resources and even links to other megathreads which goes much deeper into specific topics.

Don't feel like you need to read or complete everything here. Everyone learn differently, so you can just pick one or two resources that fits your learning style and stick with them.

So, where should you start ?

### If You're an Absolute Beginner

#### But, You Already Have Some Programming Experience

Maybe you're studying Computer Science, IT, EEE, or some other technical field. Or maybe you've already learned programming by yourself before. If that's the case, you don't really need to start from zero and relearn all the basic programming concepts.

But low-level programming is a bit different. Even if you already know how to write code, you might not fully understand what is actually happening underneath or how the computer works at a lower level.

Also, knowing the basic programming fundamentals doesn't mean you already know C.

You might already be familiar with things like variables, loops, functions, conditional statements, and basic data structures from another programming language, but C still has a lot of concepts that are important for low-level programming.

For example, if you already know the basic programming stuff, the following code should look pretty straightforward to you:

```c
int age = 20;

if (age >= 18) {
    printf("Adult\n");
}

for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```

However, the C concepts that matter in low-level programming go beyond the usual programming fundamentals. You'll also need to learn topics such as [pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming)), [memory addresses](https://en.wikipedia.org/wiki/Memory_address), and [manual memory management](https://en.wikipedia.org/wiki/Manual_memory_management), which are essential for understanding how software interacts with hardware:

```c
int *ages = malloc(5 * sizeof(int));

for (int i = 0; i < 5; i++) {
    ages[i] = 18 + i;
}

for (int i = 0; i < 5; i++) {
    if (ages[i] >= 18) {
        printf("Adult\n");
    }
}

free(ages);
```

> **How the code works:** `malloc()` allocates memory for 5 `int` values, `ages` stores the address of that memory, the first `for` loop fills the allocated memory, and the second `for` loop reads the values and checks the condition. Finally, `free(ages)` releases the allocated memory.

The good thing is you don't need to relearn everything from the beginning. If you already understand the basic programming stuff, just focus on the C concepts and computer fundamentals that you haven't learned yet. Then you can follow the roadmap and slowly build your understanding step by step.

#### But, You're Really New to Programming

If you're coming from a non-CS background and want to learn programming before getting into low-level programming, don't stress about knowing everything beforehand. Nobody starts by understanding all of this. Just focus on learning the basics first and build a good foundation, then slowly work your way into lower-level concepts as you get more comfortable.

Pick whatever works best for you and learn at your own pace. But generally, we recommend following them roughly in this order:

##### 1. Start with Basics

If you've never programmed before, this is a good place to start. It gives you a beginner-friendly introduction and helps answer some common questions about getting into programming.

- **[r/learnprogramming wiki](https://www.reddit.com/r/learnprogramming/wiki/faq/#wiki_getting_started)**

##### 2. Build your Computer Science Foundation 

Once you're comfortable with the basics, CS50 is a good next step. It helps you build a strong understanding of programming and computer science while also teaching you how to think algorithmically and solve programming problems more efficiently.

- **[CS50: Introduction to Computer Science](https://pll.harvard.edu/course/cs50-introduction-computer-science)**

##### 3. Go Deeper with a Structured Path

After CS50, you can explore more computer science topics based on your interests and goals. If you're looking for a more complete and structured way to learn by yourself, OSSU is one of the best options you can go with. It provides a full computer science curriculum covering programming, mathematics, computer systems, theory, and many other important topics.

- **[Open Source Society University (OSSU)](https://github.com/ossu/computer-science)**

The resources above are enough to get you started, but they are not the only options. Below, you'll find some other resources that are also worth checking out depending on what you want to learn.

   - **[Beej's Guide to Learning Computer Science](https://beej.us/guide/bglcs/)** 
   - **[CSdiy](https://csdiy.wiki/en/)**
   - **[Teach Yourself CS](https://teachyourselfcs.com/)**
   - **[Awesome CS](https://github.com/prakhar1989/awesome-courses)**

From there, follow the roadmap and build your understanding step by step.

### If You Have Some Low-Level Experience

If you've already worked with low-level concepts before, you can skip the beginner sections and focus on the areas that you're less familiar with. You don't need to follow the roadmap from the very beginning. Just use the table of contents to jump to the topics you want to learn and fill in any gaps in your knowledge.

### If You Have High-Level Programming Experience

If you already have experience with languages like Python, Java, or C#, you probably already have a good understanding of programming fundamentals. That gives you a good head start. But low-level programming is a bit different, so don't approach everything the exact same way.

When learning low-level programming, try not to rely too much on an object-oriented way of thinking. Instead, focus on understanding how data is stored, how memory is managed, how control flow works, and how programs interact with the hardware underneath. Depending on what you're learning, you will come across programming styles that are more [procedural](https://en.wikipedia.org/wiki/Procedural_programming), [function-based](https://en.wikipedia.org/wiki/Functional_programming), or [data-oriented](https://en.wikipedia.org/wiki/Data-driven_programming) compared to what you might be used to from high-level languages.

For example, the same task can be written using OOP in Java and a more procedural style in C.

**Java:**
```java
class Player {
    int health;

    void takeDamage(int damage) {
        health -= damage;
    }
}

Player player = new Player();
player.health = 100;

player.takeDamage(20);
```

**C:**
```c
struct Player {
    int health;
};

void take_damage(struct Player *player, int damage) {
    player->health -= damage;
}

int main(void) {
    struct Player player = {100};
    take_damage(&player, 20);
    printf("%d\n", player.health);

    return 0;
}
```

> **Why is C written this way ?** C doesn't have classes or methods like Java. Instead, C provides `struct` for grouping data and regular functions for defining behavior. This means the data and functions are separate, and you explicitly pass the data to the function when you want it to operate on that data.

This C style of programming gives you more control over how data is stored, accessed, and modified. Instead of relying on many layers of abstraction, you can more clearly see what data is being passed around, where it lives in memory, and how different parts of the program interact with it.

> This doesn't mean OOP is bad or something you should avoid. It's actually heavily used in C++, especially in areas like game development, graphics programming, simulations, and large-scale software projects. The main point is just don't treat OOP as the default solution for every problem.

Once you're comfortable with things like memory, data representation, and program flow, you can start exploring other programming paradigms and understand where each one makes sense.

From there, just continue following the roadmap and slowly build up your low-level programming knowledge step by step.

## How to Learn ?
 
Learning low-level programming isn't always easy. There will be times where you're stuck on a bug for hours, confused about a concept, feeling burned out, or even questioning why you started in the first place. That's completely normal. Every programmer goes through this. In fact, learning how to deal with difficult problems is a big part of becoming a better programmer.

If you want a broader idea of what learning programming actually looks like, we highly recommend checking out the following article:
 
- **[Teach Yourself Programming in Ten Years](https://www.norvig.com/21-days.html)**: A classic article that sets realistic expectations about learning programming and explains why becoming proficient takes time, patience, and consistent practice.

### Project-Based Learning
 
One of the most common problems beginners face is understanding a tutorial but then having no idea how to build something on their own. If that sounds familiar, try learning through projects.

Pick a topic, learn the fundamentals from one of the resources in this guide, and then try building something with it. Actually applying what you learned is where most of the real learning happens.

> For example, if you just learned about linked lists, try implementing one yourself in C. If you're learning about memory allocation, experiment with how memory works or try making a simple memory allocator yourself.

Whenever possible, try to solve problems yourself before searching for a tutorial that shows you the exact solution. Use documentation when you need help with syntax or technical details, but first try to think through the problem yourself. Once you've built something on your own, compare your solution with other implementations and see what you can learn from them.

> Also, be careful not to fall into tutorial hell. It's easy to spend hours watching videos, reading articles, and saving resources without actually writing any code. Tutorials can help you understand concepts, but they can't replace hands-on practice. 

Focus on learning the fundamentals, building small projects, and writing your own code. It's completely fine if your first solutions are not great. What's important is that you start, make mistakes, and slowly improve over time.
 
### Using AI Tools
 
AI can be a good learning aid, but it's better to use it as a tool rather than a shortcut. When you run into a problem, try spending some time figuring it out yourself before asking AI. Struggling with a problem can be frustrating, but that's usually where a lot of the actual learning happens.

AI is most useful when you use it to explain concepts, help understand error messages, point out mistakes in your reasoning, or guide you toward possible solutions. You can also use it like Google to look up things like syntax, API details, documentation, or quick explanations.

Try not to immediately ask AI to write the entire program or solve the problem from start to finish. Use it as a learning tool to understand what you're doing instead of just getting the answer.

> Use AI to support your learning, not to replace the thinking and problem-solving that actually helps you grow as a programmer.

---

## What is Low-Level Programming ?

<p align="center">
  <img width="4139" alt="Untitled-2026-08-25-2028" src="https://github.com/user-attachments/assets/8c9d045b-edb1-46d5-91dd-558e0dd53737" />
</p>

The diagram shows the different layers between the programmer and the computer's hardware. At the very bottom is the hardware itself, the physical parts that actually execute instructions and do the computations. Above that, you have [machine code](https://en.wikipedia.org/wiki/Machine_code), [assembly](https://en.wikipedia.org/wiki/Assembly_language), and programming languages. As you move higher up the stack, more of the hardware complexity is hidden behind layers of abstraction, which makes programming easier but also gives you less direct control over what's happening underneath.

[Low-level programming](https://en.wikipedia.org/wiki/Low-level_programming_language) is about working closer to the machine and understanding what's actually happening across these layers. Instead of relying too much on abstractions, you work more directly with things like [memory](https://en.wikipedia.org/wiki/Computer_memory), the [CPU](https://en.wikipedia.org/wiki/Central_processing_unit), and other hardware resources.

That's why low-level programming is often described as being "close to the hardware." Languages like Assembly and C are classic examples of low-level programming languages. Modern languages like C++, Rust, Zig, and Odin are also widely used for low-level and systems programming, while giving you different trade-offs between control, safety, and abstraction.

> Low-level programming is commonly used in areas where performance, efficiency, and hardware control are important. This includes operating systems, embedded systems, firmware, device drivers, compilers, game engines, graphics programming, networking, and other performance-critical software. In these areas, programmers often need more precise control over memory usage, hardware interaction, and how the system behaves.

---

## Low-Level Programming vs System Programming

A common misconception is that low-level programming and systems programming are the same thing. They are closely related and often overlap, but they are actually two different ideas.

Low-level programming is more about how closely your code interacts with the hardware. It focuses on things like memory, CPU instructions, pointers, registers, and data representation. Basically, it's about understanding and controlling what happens underneath the abstractions provided by higher-level languages.

[Systems programming](https://en.wikipedia.org/wiki/Systems_programming), on the other hand, is more about the type of software you're building. It involves creating software that supports, manages, or provides services for other software. Examples include operating systems, compilers, databases, device drivers, runtimes, networking software, and servers.

Because many system-level applications need direct access to hardware and efficient resource management, these two areas often overlap. For example, writing an operating system kernel in C is both systems programming and low-level programming. However, not all systems programming has to be low-level. Modern languages can also be used to build system software while providing more abstraction, safety, or convenience.

> A simple way to think about it is this: low-level programming describes how close your code is to the hardware, while systems programming describes what kind of software you're building.

- **[What is Systems Programming, Really ?](https://willcrichton.net/notes/systems-programming/):** A beginner-friendly article that explores what systems programming actually means and how it differs from low-level programming.

---

## Why Learning C is Important ?
 
If you're interested in low-level programming, [C](https://en.wikipedia.org/wiki/C_(programming_language)) is one of the best places to start. Despite being over 50 years old, it remains one of the most important and widely used programming languages in the world. Many of the ideas, tools, and technologies that modern programmers use today have their roots in C.

Some of the reasons C is still so important include:
 
- **C runs almost everywhere**. From tiny microcontrollers and embedded devices to desktop applications, servers, and operating systems, C can be found on nearly every type of computing platform.
- **C is efficient and lightweight**. It allows programmers to write software that uses very little memory and processing power, making it ideal for performance-critical and resource-constrained systems.
- **C is flexible**. Unlike many modern languages, C doesn't force you into a specific programming style or paradigm. It gives you the freedom to structure programs in whatever way makes the most sense for the problem you're solving.
- **C imposes very few restrictions on programming style**. Unlike many higher-level languages, it does not strongly enforce a particular programming paradigm or ideology. As a result, there are very few kinds of programs that cannot be written in C.
- **A huge amount of software is built on C**. Many programming languages, operating systems, databases, compilers, and developer tools are written in C or heavily influenced by it. Languages such as Python, Ruby, PHP, and Perl rely on runtimes and implementations that are largely written in C or C++.
 
One of the biggest strengths of C is that it teaches you to be careful. The language gives you a lot of power and freedom, but with that freedom comes responsibility. Small mistakes can lead to serious problems if you're not paying attention. For example, you may encounter issues such as [invalid memory access](https://en.wikipedia.org/wiki/Out_of_memory), [buffer overflows](https://en.wikipedia.org/wiki/Buffer_overflow), [memory leaks](https://en.wikipedia.org/wiki/Memory_leak), [undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior) and [pointer related bugs](https://en.wikipedia.org/wiki/Stale_pointer_bug).

Learning to avoid these problems forces you to think more carefully about how memory, data, and system resources are being used.
 
> In many ways, C is an excellent teacher. It doesn't hide as much from you as higher-level languages do, and mistakes often have visible consequences. While this can be frustrating at times, it also helps you develop stronger debugging skills and better programming habits.

Another reason C remains valuable is its influence on the programming world. Many modern languages have borrowed ideas, syntax, and design choices directly from C.
 
> By learning C, you'll gain a better understanding of why many modern language features exist in the first place. It also helps you see what's happening behind the scenes, something that's often hidden when working with higher-level languages like Python, JavaScript, or Java.

---
 
## C vs C++ in Low-Level Programming

Stroustrup explains that modern C and modern C++ are better understood as [sibling languages](https://www.stroustrup.com/siblings_short.pdf#:~:text=C%2B%2B%20is%20a%20descendant%20of%20K%26R%20C.,%2B%20%2B%209%208%20C%208%209) rather than one simply being a newer version of the other. Both languages evolved from a common ancestor, K&R C, but they later developed in different directions.

This is important because C++ did not simply inherit modern versions of C such as C99 or C11. While the two languages still share a lot of concepts and historical overlap, they have evolved separately. This is also why modern C and modern C++ can sometimes behave quite differently despite looking very similar.

The idea of treating them as sibling languages is also useful when deciding which one to learn. You'll often hear people say "learn C before C++," especially when talking about low-level programming. The reasoning behind this is that C exposes more of what is happening under the hood.

C provides relatively few abstractions, so you're often forced to understand things like memory, pointers, strings, and data representation instead of relying on language features to handle them for you. Because of this, C is commonly used in low-level, and learning it can be a good way to get familiar with some of the fundamental concepts behind how programs actually work.

C++, on the other hand, provides many more abstractions and tools that can make development easier. Features like classes, templates, and the standard library allow you to build larger and more complex software without having to implement everything yourself. The trade-off is that it is possible to use these features without fully understanding what is happening underneath.

That doesn't mean C++ automatically means you're programming at a higher level. One of the strengths of C++ is that it gives you a choice in how much abstraction you want to use. You can write code that is very close to C when you need direct control, or take advantage of higher-level features when they make sense.

> Both C and C++ are powerful languages that are widely used for low-level. Neither one is inherently better for every situation.

So, do you have to learn C before learning C++ ?

Not at all.

If C++ interests you more, it's perfectly reasonable to start there. You don't need to master C first before touching C++. Just make sure you take the time to understand the fundamental concepts that C++ is built on, especially things like memory, pointers, data layout, and how programs interact with the system.

Likewise, starting with C and moving to C++ later is also a reasonable path. Learning C first can make it easier to understand what some of the abstractions in C++ are actually doing behind the scenes. But there is no requirement that you follow this path if C++ is what you actually want to learn.
 
---

## Let's Gooo !
 
Now that you have a basic idea of what low-level programming is, it's time to start learning. Don't worry, we're not gonna jump straight into assembly or start building an operating system on day one. The goal is to build a good foundation first, understand how computers work, and slowly move closer to the hardware as you learn more.

Take your time with the roadmap. Low-level programming is a pretty broad field, and it's completely normal if some topics take longer to understand than others. Focus on understanding the fundamentals instead of rushing through everything.

Each section in the roadmap starts with an explanation, followed by a list of recommended resources. The resources are generally arranged in priority order, so we recommend starting with the first resource and then moving down the list when needed.

Depending on the topic, some sections might put a book before an official website or reference, while others might recommend official documentation or references first. Just follow the order given and use the additional resources whenever you feel like you need another explanation or want to learn something in more depth.

> One of the most useful skills you can develop as a programmer is learning how to find and understand information by yourself. Tutorials are useful, but they shouldn't be your only way of learning. Get comfortable reading documentation, researching topics, experimenting with code, and figuring things out on your own. These skills will help you long after you finish this roadmap.
 
---
 
# Roadmap
 
<p align="center">
  <img width="300" alt="Roadmap" src="https://github.com/user-attachments/assets/e390e835-4b3a-4410-8399-46203d300b8e" />
</p>

## 1. Basic Electronics
 
You don't need to have an in-depth knowledge of electronics before you start learning C or low-level programming. A basic understanding is more than enough.

The goal here isn't to become an electrical engineer. Instead, it's to learn some fundamental concepts that can help you understand how computers work at the hardware level. Understanding things like voltage, [logic gates](https://en.wikipedia.org/wiki/Logic_gate), and simple [digital circuits](https://en.wikipedia.org/wiki/Electronic_circuit#Digital_circuits) can make it much easier to understand what the computer is actually doing underneath.

- **[MIT OpenCourseWare: Circuits & Electronics](https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/)** 
- **[Nand2Tetris](https://www.nand2tetris.org/)**

## 2. Computer Fundamentals
 
Once you have a basic idea about the hardware side, start building a strong foundation in computer fundamentals. This is one of the most important parts of the roadmap because a lot of low-level programming concepts are built on these ideas.

Learn how computers store and represent information, how the CPU executes instructions, how memory is organized, and how software interacts with hardware. As you go deeper into low-level programming, things like binary, [microarchitecture](https://en.wikipedia.org/wiki/Microarchitecture), [ISA](https://en.wikipedia.org/wiki/Instruction_set_architecture), memory, storage, [registers](https://en.wikipedia.org/wiki/Processor_register), [caches](https://en.wikipedia.org/wiki/Cache_(computing)), and instruction execution will become more and more important.

> The better you understand how a computer works internally, the easier it becomes to understand what's actually happening when your code runs. A lot of concepts that seem confusing in low-level programming start making much more sense once you have a good understanding of these fundamentals.

- **[Exploring How Computers Work](https://www.youtube.com/watch?v=QZwneRb-zqA)**
- **[Computer Systems: A Programmer's Perspective](https://www.amazon.com/dp/9332573905/)**
- **[The Hidden Language of Computer Hardware and Software](https://charlespetzold.com/code/)**
- **[Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/)**
 
## 3. C Programming

<img width="150" alt="c_512x512" src="https://github.com/user-attachments/assets/4b52552b-d591-4bf8-9d59-64f2e86d61cc" />
 
Once you've built a basic understanding of how computers work, it's time to start learning C. While learning pay attention to things like pointers, arrays, structs, memory allocation, stack and heap memory, data representation, and bitwise operations. These topics are an important foundation for low-level programming.

As you learn, try to look beyond what your code does and start asking how it actually works. Where is the data stored ? What happens in memory when a function is called ? How does the program access and modify data? Developing this mindset will help you get much more out of C instead of just learning the syntax of the language.

- **[The ANSI C Book](https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628)**
- **[Beej's Guide to C Programming](https://beej.us/guide/bgc/)**
- **[C FAQ](https://c-faq.com/)**
- **[Dive into Systems](https://diveintosystems.org/book/)**
- **[C Interfaces and Implementations](https://github.com/drh/cii)**
 
## 4. Practice Data Structures & Algorithms
 
Once you're comfortable writing programs in C, start learning data structures and algorithms (DSA). These are important tools for organizing data efficiently and solving problems effectively.

Focus on learning common data structures like [arrays](https://en.wikipedia.org/wiki/Array_(data_structure)), [linked lists](https://en.wikipedia.org/wiki/Linked_list), [stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)), [queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)), [hash tables](https://en.wikipedia.org/wiki/Hash_table), [trees](https://en.wikipedia.org/wiki/Binary_tree), [heaps](https://en.wikipedia.org/wiki/Heap_(data_structure)), and [graphs](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)). Along with them, learn important algorithmic concepts like [searching](https://en.wikipedia.org/wiki/Search_algorithm), [sorting](https://en.wikipedia.org/wiki/Sorting_algorithm), [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)), [traversal techniques](https://en.wikipedia.org/wiki/Tree_traversal), and general problem-solving strategies.

> DSA is generally language agnostic, meaning the core concepts can be learned using any programming language. However, since this roadmap focuses on low-level programming, resources that teach DSA using C may be more relevant and useful.

- **[MIT 6.006: Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)** 
- **[CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/index.html)**
- **[Data Structures and Algorithms Tutorial](https://www.w3schools.com/dsa/index.php)**
- **[Notes on Data Structures and Programming Techniques](https://cs.yale.edu/homes/aspnes/classes/223/notes.html)**
- **[Algorithms for Competitive Programming](https://cp-algorithms.com/)**
- **[Algorithms Design in C](https://www.ime.usp.br/~pf/algorithms/)**
- **[C DSA interactive Suite](https://github.com/darshan2456/C_DSA_interactive_suite)**
- **[Algorithms (Sedgewick & Wayne)](https://algs4.cs.princeton.edu/home/)**
 
## 5. Build Small Projects
 
Once you feel comfortable with C and have some experience with data structures and algorithms, start building small projects of your own. This is where everything you've learned starts coming together.

Reading about concepts is important, but you really understand them when you actually use them. Writing your own programs will force you to make decisions, solve problems, debug errors, and think more carefully about memory, data structures, program design, and how your code actually behaves.

Don't be afraid to experiment. Try different approaches, break things, fix them, and learn from the process. That's how most programmers improve.

> You don't need to build something huge or impressive. A simple project that teaches you a new concept can be more valuable than a big project that you don't fully understand. The goal is to take what you've learned from C, computer fundamentals, and DSA and turn it into actual hands-on experience.

## 6. Learn Modern Low-Level Languages (Optional)
 
Once you've built a good foundation with C and completed a few projects, you can start exploring other low-level languages. Popular choices include C++, Rust, Zig, and Odin, and each one comes with its own balance between performance, control, safety, and developer experience.

Pick one or two that actually interest you and learn them alongside C. And if you enjoy working with C, it's completely fine to stick with it. C is still one of the most important languages in low-level programming and is widely used in the industry. Learning other languages can give you a different perspective, but it's not required to become a good low-level programmer.

### Procedural Languages

#### C++

<img width="150" alt="cpp_logo" src="https://github.com/user-attachments/assets/3ed8fce0-cc22-48ae-bde1-3d136f6f4ad1" />

[C++](https://en.wikipedia.org/wiki/C%2B%2B) extends low-level programming with powerful abstraction mechanisms while still giving you significant control over memory, performance, and hardware-level details.
 
> C++ is a continuously evolving language. Because of that, many old tutorials, books, and videos you find online may teach outdated methods or older versions of the language. If you're starting today, it's much better to focus on modern C++, specifically standards like C++17, C++20, and C++23, since those reflect how C++ is actually used nowadays.

- **[LearnCpp](https://www.learncpp.com/)**
- **[Programming: Principles and Practice Using C++](https://www.amazon.com/dp/0138308683)**
- **[A Tour of C++](https://www.amazon.com/dp/013681648)**
- **[Cppreference](https://en.cppreference.com/)**
- **[Data-Oriented Design Resources](https://github.com/dbartolini/data-oriented-design)**

#### Rust

<img width="150" alt="rust-logo-512x512" src="https://github.com/user-attachments/assets/86e703e4-ff32-44c2-9e65-4dc8af1093c7" />

[Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) focuses on systems programming with strong compile-time guarantees for memory safety and concurrency.

- **[The Rust Programming Language](https://doc.rust-lang.org/book/)**
- **[Rustlings](https://github.com/rust-lang/rustlings)**
- **[Exercism Rust Track](https://exercism.org/tracks/rust)**
- **[Learning Rust](https://learning-rust.github.io/)**
- **[This Week in Rust](https://this-week-in-rust.org/)**
- **[Rust by Example](https://doc.rust-lang.org/rust-by-example/)**
- **[Beginner's Series to Rust](https://learn.microsoft.com/en-us/shows/beginners-series-to-rust/)**
- **[The Little Book of Rust Macros](https://veykril.github.io/tlborm/)**
- **[Learn Rust Page](https://www.rust-lang.org/learn)**
- **[Rust FFI Omnibus](https://jakegoulding.com/rust-ffi-omnibus/)**
- **[Rust Cheatsheet](https://cheats.rs/)**
- **[Awesome Rust](https://github.com/rust-unofficial/awesome-rust)**

#### Zig

<img width="150" alt="zig-programming-language-icon" src="https://github.com/user-attachments/assets/fa4257a9-5645-48a2-ae13-6657c2710d0a" />

[Zig](https://en.wikipedia.org/wiki/Zig_(programming_language)) emphasizes explicit control, predictable behavior, and close interoperability with C while providing a modern approach to systems programming.

- **[Zig Learn](https://ziglearn.org/)**
- **[Zig Language Reference](https://ziglang.org/documentation/master/)**
- **[Ziglings](https://codeberg.org/ziglings/exercises)**
- **[Learning Zig](https://pedropark99.github.io/zig-book/)**
- **[Awesome Zig](https://github.com/zigcc/awesome-zig)**

#### Odin

<img width="150" alt="odin" src="https://github.com/user-attachments/assets/0d3d6347-2da6-4545-9a8c-391259d70d93" />

Odin is a systems programming language focused on simplicity, explicitness, performance, and practical software development.

- **[Odin Overview](https://odin-lang.org/docs/overview/)**
- **[Odin Demo Program](https://github.com/odin-lang/Odin/blob/master/examples/demo/demo.odin)**
- **[Understanding the Odin Programming Language](https://odinbook.com/)**
- **[Learn Odin in Y Minutes](https://learnxinyminutes.com/odin/)**
- **[Awesome Odin](https://github.com/jakubtomsu/awesome-odin)**
 
If you're curious about different ways of thinking about programming, you can also experiment with less traditional languages such as Ante, Carp, Futhark and Forth. Exploring these languages can expose you to programming concepts and ideas that are very different from what you'll encounter in C.

### Non-Procedural Languages

#### Ante
A functional systems language inspired by ML, with Rust-inspired memory management.
- **[Ante Lang](https://antelang.org/)**

#### Carp
A LISP designed for game development with Rust-inspired memory management and low-level control.
- **[Carp Lang](https://github.com/carp-lang/Carp)**

#### Futhark
An ML-style functional language for high-performance parallel computing on GPUs, with CUDA, HIP, and OpenCL backends.
- **[Futhark Lang](https://futhark-lang.org/)**

#### Forth
A stack-based language well suited for embedded programming and direct hardware control.
- **[Awesome Forth](https://github.com/lassik/awesome-forth)**
 
> If terms like procedural and non-procedural sound confusing, don't worry too much about them right now. Procedural languages, such as C, generally focus on a sequence of instructions that tell the computer exactly what to do step by step. Other programming models, such as functional or stack-based programming, approach problem solving in different ways and can give you a fresh perspective on how programs can be designed.

The reason to learn extra languages because to deepen your understanding of programming and learn new ways to think about problems. A programmer who understands the fundamentals well can usually pick up new languages much more easily when needed.
 
## 7. Pick a Specialized Field
 
By this point, you should have a solid foundation in computer fundamentals, C programming, data structures and algorithms, and some hands-on project experience. Once you're comfortable with these core concepts, you can start exploring a specific area of low-level programming that interests you most.

There’s no rush to specialize right away. Many beginners make the mistake of jumping into advanced topics too early before building the fundamentals. Taking the time to develop a strong foundation first will make learning specialized topics much easier later on.
 
### Which Field to Pick ?

If you're new to low-level programming, figuring out where to start can feel a bit confusing. There are several specializations, and each one focuses on different aspects of computers and software. A good way to narrow things down is to follow what naturally interests you, whether that's a programming language you enjoy, a specific field you find exciting, or a desire to work closer to the hardware itself. The important thing is to start somewhere and adjust your path as you learn more about what you enjoy.
 
#### Following the Language You Like

One easy way to explore different fields is by starting with a programming language you already enjoy. Different domains tend to favor certain languages, and many fields have a few languages that are considered industry standards.

> For example, if you enjoy writing C++, you might find yourself interested in areas like Game Engine Development, Graphics Programming, or GPGPU and Parallel Computing, since C++ is heavily used in those fields. Rather than forcing yourself into a specialization first, it can be useful to see where your favorite language is commonly applied and explore from there.

#### Following How Close You Want to Be to Hardware

Another approach is to think about how much interaction you want with actual hardware and electronics.

Some areas of low-level programming require very little electronics knowledge, while others demand a much deeper understanding of digital logic, computer architecture, and hardware design. In general, the closer a field is to the hardware itself, the more you'll need to understand how electronic systems work behind the scenes.

> For example, areas like Embedded Systems and FPGA Programming sit much closer to the hardware layer, so they usually require a stronger understanding of how electronic systems work behind the scenes.

#### Following Your Interests

Personally, we think this is the least stressful approach for beginners.
You don't need to pick a specialization right away, and you definitely don't need to master every fundamental topic before starting something interesting. If a particular field catches your attention, just begin building small projects and learning as you go. Whenever you run into a concept you don't understand, that's the perfect opportunity to learn it.

Your interests will probably change over time anyway, and that's completely normal. Many people start in one area and later discover another field they enjoy even more.

The good news is that you don't have to lock yourself into a single path from day one. Just pick something that seems fun, keep building things, and let your interests guide you as you gain more experience.

### Low-Level Programming Fields

#### 1. Embedded Systems

Embedded programming is about writing software for dedicated devices that perform specific tasks, such as microcontrollers, robots, automotive systems, IoT devices, and industrial equipment. Unlike desktop or web development, you'll often work much closer to the hardware, where memory, processing power, and power are limited.

You'll commonly use C and C++, with Rust becoming more popular in some projects. You'll work with microcontrollers like STM32, ESP32, AVR, and ARM Cortex-M, while dealing with things like GPIO, hardware registers, interrupts, timers, DMA, and protocols such as UART, SPI, I²C, and CAN.

> Depending on the project, you may also work with sensors, motors, displays, wireless modules, and RTOSes like FreeRTOS or Zephyr. Tools like JTAG, SWD, logic analyzers, and oscilloscopes are also commonly used for debugging and testing.

- **[Awesome Embedded](https://github.com/nhivp/Awesome-Embedded)**
- **[Awesome Embedded Linux](https://github.com/fkromer/awesome-embedded-linux)**

---

#### 2. Compilers & Interpreters

Compiler and interpreter development is about understanding what happens behind the scenes when you write and run code. Instead of building applications, you're building the tools that process programming languages and turn them into something a computer can understand and execute.

In this field, you'll learn about things like lexers, parsers, Abstract Syntax Trees (ASTs), type systems, semantic analysis, Intermediate Representations (IRs), optimizations, and machine code generation. You'll see how source code goes through different stages before becoming an executable program.

> The tech stack often includes languages like C++, Rust, C, OCaml, and Java, along with tools like LLVM, Clang, GCC, MLIR, ANTLR, Flex, and Bison. You may also come across virtual machines, bytecode, JIT compilers, garbage collectors, and CPU architectures like x86-64, ARM, and RISC-V.

- **[Awesome Compilers](https://github.com/aalhour/awesome-compilers)**

---

#### 3. Operating Systems Development

Operating systems development is one of the closest software fields to computer hardware. It focuses on building the software layer between applications and the hardware, managing things like the CPU, memory, storage, and peripherals. Working in this area gives you a much deeper understanding of how computers actually work underneath.

You'll commonly use C, C++, Rust, and sometimes Assembly. You'll learn about things like memory management, virtual memory, process and thread scheduling, interrupts, system calls, file systems, device drivers, synchronization, concurrency, and kernel architecture. You'll also come across architectures like x86-64, ARM, and RISC-V, along with concepts like paging, context switching, bootloaders, and hardware abstraction layers.

> Many OS developers study or contribute to projects like Linux, FreeBSD, Windows internals, Minix, or hobby operating systems. For debugging, tools like GDB, QEMU, Bochs, and different kernel debugging tools are commonly used.

- **[Awesome OS Dev](https://github.com/devse-org/awesome-osdev)**

---

#### 4. GPGPU & Parallel Computing

GPGPU (General-Purpose Computing on Graphics Processing Units) is about using GPUs for more than just rendering graphics. Instead of drawing images, you use the GPU to perform large computations that can be split into thousands or even millions of smaller tasks running in parallel.

You'll commonly work with things like CUDA, OpenCL, SYCL, HIP, and C++. You'll learn concepts such as parallel programming, threads, warps, kernels, shared memory, memory bandwidth, vectorized computation, and GPU architecture. Common hardware includes NVIDIA, AMD, and Intel GPUs, often working together with powerful CPUs.

> GPGPU is widely used in areas like scientific computing, physics simulations, machine learning, AI, image processing, financial modeling, and other workloads that need a lot of computation. Since GPUs have many smaller processing cores that can run tasks in parallel, they can be much faster than CPUs for certain types of problems.

- **[Awesome GPGPU](https://github.com/jslee02/awesome-gpgpu)**
- **[Awesome GPU](https://github.com/Jokeren/Awesome-GPU)**

---

#### 5. Graphics Programming

Graphics programming sits between programming, mathematics, and GPU hardware. It focuses on creating and rendering visual content, from simple 2D graphics to realistic 3D worlds used in games, simulations, VR, and visualization software. You'll learn how data gets transformed into pixels on the screen and how GPUs render complex scenes efficiently.

You'll commonly use C++ with graphics APIs like Vulkan, OpenGL, DirectX 12, and sometimes Metal. You'll come across concepts like rendering pipelines, vertex transformations, camera systems, lighting, textures, materials, shadows, animation, rasterization, and ray tracing. You'll also write shaders using languages like GLSL and HLSL, which run directly on the GPU.

> Graphics programming relies heavily on math like linear algebra, vectors, matrices, transformations, and geometry. You'll work closely with GPUs from companies like NVIDIA, AMD, and Intel, while learning how to optimize rendering performance and efficiently use graphics resources. Graphics programming is used in game engines, 3D modeling software, VR/AR applications, scientific visualization, CAD software, simulations, and modern user interfaces.

- **[Awesome Graphics Programming](https://gist.github.com/notnotrobby/ceef71527b4f15869133ba7b397912e9)**

---

#### 6. Game Engine Development

Game engine development is one of the broadest areas in low-level programming because it combines many different fields into one system. Instead of building a whole game, you're building the technology that games run on. A game engine handles things like graphics, physics, audio, input, memory management, and many other systems working together underneath.

You'll mainly work with C++, and sometimes C#, Rust, or scripting languages like Lua. You'll come across systems like rendering, physics, audio, animation, resource management, entity-component systems (ECS), memory allocators, multithreading, scripting, and asset pipelines. Graphics APIs like Vulkan, DirectX, and OpenGL are also commonly used, along with math concepts like vectors, matrices, transformations, and collision detection.

> Game engine developers often work with technologies found in engines like Unreal Engine, Unity, Godot, Source Engine, or custom engines. The field also overlaps with graphics programming, physics simulation, networking, tools development, and performance optimization.

- **[Awesome Game Engine Dev](https://github.com/stevinz/awesome-game-engine-dev)**
- **[Awesome Game Engines](https://github.com/ChessMax/awesome-game-engines)**

---

#### 7. Network Systems Programming

Network systems programming focuses on how computers communicate and exchange data over networks. Instead of building websites or user interfaces, you're working on the systems underneath that allow devices, servers, and applications to send, receive, and process data efficiently. This field is used in everything from web servers and cloud infrastructure to multiplayer games and distributed systems.

You'll commonly use C, C++, Rust, and Go. You'll work with networking concepts like sockets, TCP/IP, UDP, HTTP, WebSockets, DNS, TLS/SSL, packet transmission, routing, and load balancing. You'll also come across systems programming topics like asynchronous programming, multithreading, concurrency, event loops, epoll, io_uring, and performance optimization.

> The tech stack often includes things like Linux networking, Nginx, HAProxy, Wireshark, gRPC, Redis, Kafka, and cloud platforms. You'll spend a lot of time analyzing network traffic, handling thousands or even millions of connections, reducing latency, and making sure distributed systems can communicate reliably.

- **[Awesome Networking](https://github.com/facyber/awesome-networking)**
- **[Awesome Computer Networking](https://github.com/nyquist/awesome-networking)**
- **[Awesome Network Programmability](https://github.com/cisco-ie/awesome-network-programmability)**
- **[Awesome Game Networking](https://github.com/rumaniel/Awesome-Game-Networking)**

---

#### 8. Cybersecurity

Cybersecurity is about protecting computer systems, networks, applications, and data from attacks, vulnerabilities, and unauthorized access. Instead of mainly building features for users, you're learning how systems can be secured, how attackers find weaknesses, and how those weaknesses can be detected and prevented.

You'll commonly work with Linux, Windows internals, C, C++, Python, Rust, and scripting languages like Bash or PowerShell. You'll come across topics like network security, operating system security, cryptography, secure coding, authentication, authorization, malware analysis, reverse engineering, binary exploitation, digital forensics, incident response, and vulnerability assessment.

> The tech stack often includes tools like Wireshark, Nmap, Burp Suite, Metasploit, Ghidra, IDA Pro, Sysinternals, John the Ripper, Hashcat, and different SIEM platforms. You'll also learn about protocols like TCP/IP, DNS, HTTP/HTTPS, and TLS, along with how attackers and defenders interact with modern computer systems.

- **[Pwn College](https://pwn.college/)**
- **[Awesome Infosec](https://github.com/onlurking/awesome-infosec)**
- **[Awesome List](https://github.com/0xor0ne/awesome-list)**

---

# Recommended Creators

A collection of creators who cover topics related to low-level programming.

> Learn from these creators by watching their videos, following their projects, and studying their code and problem-solving approaches. Treat them as mentors and learn from their experience.

- **[Tsoding](https://www.youtube.com/@Tsoding)**
- **[ThePrimeTimeagen](https://www.youtube.com/@ThePrimeTimeagen)**
- **[CakeZ](https://www.youtube.com/@Cakez77)**
- **[Artful Bytes](https://www.youtube.com/@artfulbytes)**
- **[hoff._world](https://www.youtube.com/@hoff._world)**
- **[tokyospliff](https://youtube.com/@tokyospliff)**
- **[Sebastian Lague](https://youtube.com/@sebastianlague)**
- **[javidx9](https://youtube.com/@javidx9)**
- **[3Blue1Brown](https://youtube.com/@3blue1brown)**
- **[Code Guild](https://youtube.com/@code-guild)**
- **[TechExplained](https://www.youtube.com/@TechsExplained)**
- **[Low Level Game Dev](https://www.youtube.com/@lowlevelgamedev9330)**
- **[Core Dumped](https://youtube.com/@coredumpped)**
- **[Dave's Garage](https://www.youtube.com/@DavesGarage)**

---

# Discord

Join our Discord server if you need help, want to learn low-level programming, or would like to contribute to the megathread.

  <a href="https://discord.gg/YZRknMKn2K">
    <img width="200" alt="photo_6145283918186353599_y" src="https://github.com/user-attachments/assets/692b8958-4ec9-4b55-bbde-814364832231" />
  </a>

---

# License

This project is released under the **CC0 1.0 Universal** license, placing the content in the public domain where legally possible.

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)


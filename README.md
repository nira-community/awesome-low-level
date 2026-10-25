# Awesome Low Level

A curated collection of resources for learning low-level programming from the ground up, starting with electronics and working toward whichever specialized field ends up catching your interest.

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
  - [2. Assembly](#2-assembly)
    - [x86-64](#x86-64)
    - [ARM](#arm)
    - [RISC-V](#risc-v)
  - [3. Computer Fundamentals](#3-computer-fundamentals)
  - [4. C Programming](#4-c-programming)
  - [5. Practice Data Structures & Algorithms](#5-practice-data-structures--algorithms)
  - [6. Build Small Projects](#6-build-small-projects)
  - [7. Learn Modern Low-Level Languages (Optional)](#7-learn-modern-low-level-languages-optional)
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
  - [8. Pick a Specialized Field](#8-pick-a-specialized-field)
    - [Which Field to Pick ?](#which-field-to-pick-)
      - [Following the Language You Like](#following-the-language-you-like)
      - [Following How Close You Want to Be to Hardware](#following-how-close-you-want-to-be-to-hardware)
      - [Following Your Interests](#following-your-interests)
    - [Low-Level Programming Fields](#low-level-programming-fields)
      - [1. Embedded Systems](#1-embedded-systems)
      - [2. Compilers & Interpreters](#2-compilers--interpreters)
      - [3. Operating Systems Development](#3-operating-systems-development)
      - [4. GPGPU & Parallel Computing](#4-gpgpu--parallel-computing)
      - [5. Graphics Programming](#5-graphics-programming)
      - [6. Game Engine Development](#6-game-engine-development)
      - [7. Network Systems Programming](#7-network-systems-programming)
      - [8. Cybersecurity](#8-cybersecurity)
- [Recommended Creators](#recommended-creators)
- [Discord](#discord)
- [License](#license)

---

## Why We Made This ?

We made this megathread mainly for complete beginners who want to take their first step into low-level programming. Getting started is confusing when you have no idea what to learn, where to begin, or which topics actually matter, and most of the advice you find online assumes you already know half of it. So we put together a clear path you can follow one step at a time.

We spent a lot of time going through resources and keeping only the ones we think are worth your time. The people behind this guide are passionate about low-level programming and would like more people to get into it. Whether you're brand new or just stuck on what to learn next, we hope this gives you a solid foundation and a better idea of where to go from here.

---

## How to Refer ?

This megathread is not a perfect or complete guide, and we almost certainly missed a few topics and resources along the way. That's fine. Some sections have several resources, and a few even link to other megathreads that go much deeper into a specific topic.

You don't have to read or finish everything here. Everyone learns differently, so pick one or two resources that suit you and stick with them.

So, where should you start ?

### If You're an Absolute Beginner

#### But, You Already Have Some Programming Experience

Maybe you're studying Computer Science, IT, EEE, or some other technical field, or maybe you taught yourself programming a while ago. Either way, there's no need to start from zero and relearn what a variable is.

Low-level programming is a different animal, though. You can write plenty of code and still have no real idea what happens underneath, or how the computer actually runs it.

Also, knowing programming basics doesn't mean you know C.

You probably recognize variables, loops, functions, conditions, and basic data structures from another language, but C comes with a lot more that matters for low-level work.

For example, if you already know the basics, this code should look familiar:

```c
int age = 20;

if (age >= 18) {
    printf("Adult\n");
}

for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```

What makes C important for low-level programming goes well past this. You'll need to get comfortable with [pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming)), [memory addresses](https://en.wikipedia.org/wiki/Memory_address), and [manual memory management](https://en.wikipedia.org/wiki/Manual_memory_management), since these are what connect your software to the hardware:

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

> **How the code works:** `malloc()` requests `5 * sizeof(int)` bytes from the heap and returns a pointer to the start of that block, which `ages` stores. The memory comes back uninitialized, so the first `for` loop fills it and the second one reads the values back and checks the condition. `free(ages)` returns the block to the allocator. A real program should also check that `malloc()` didn't return `NULL`, and it must never touch `ages` again after the `free()`.

You don't have to relearn everything from scratch, though. Just focus on the C concepts and computer fundamentals you haven't seen yet, then follow the roadmap and build things up step by step.

#### But, You're Really New to Programming

If you come from a non-CS background and want to learn programming before touching low-level stuff, don't worry about knowing everything up front. Nobody starts out understanding all of this. Learn the basics, build a decent foundation, and move into the lower-level concepts as you get more comfortable.

Pick whatever works for you and take it at your own pace, but we'd suggest going through these roughly in this order:

##### 1. Start with Basics

If you've never programmed before, begin here. It's a beginner-friendly introduction that answers a lot of the questions people usually have when they first get into programming.

- **[r/learnprogramming wiki](https://www.reddit.com/r/learnprogramming/wiki/faq/#wiki_getting_started)**

##### 2. Build your Computer Science Foundation 

Once the basics feel comfortable, CS50 is a great next step. It gives you a solid understanding of programming and computer science, and it teaches you how to think through problems step by step.

- **[CS50: Introduction to Computer Science](https://pll.harvard.edu/course/cs50-introduction-computer-science)**

##### 3. Go Deeper with a Structured Path

After CS50 you can pick topics based on what you want to do. If you'd like a complete, structured way to study on your own, OSSU is hard to beat. It's a full computer science curriculum covering programming, math, computer systems, theory, and a lot more.

- **[Open Source Society University (OSSU)](https://github.com/ossu/computer-science)**

Those are enough to get going, but they're far from the only options. Here are a few more worth a look, depending on what you want to learn.

   - **[Beej's Guide to Learning Computer Science](https://beej.us/guide/bglcs/)** 
   - **[CSdiy](https://csdiy.wiki/en/)**
   - **[Teach Yourself CS](https://teachyourselfcs.com/)**
   - **[Awesome CS](https://github.com/prakhar1989/awesome-courses)**

From there, follow the roadmap and build your understanding step by step.

### If You Have Some Low-Level Experience

If you've already worked with low-level concepts, skip the beginner parts and spend your time on what you're less familiar with. You don't need to follow the roadmap from the start. Use the table of contents to jump to the topics you want and fill in the gaps.

### If You Have High-Level Programming Experience

If you already work with languages like Python, Java, or C#, you've probably got a good grip on programming fundamentals, which is a nice head start. Low-level programming is still a different thing, so try not to approach it the exact same way.

In particular, don't lean too hard on object-oriented thinking. Pay attention to how data is stored, how memory is managed, how control flow works, and how your program talks to the hardware underneath. Along the way you'll run into styles that are more [procedural](https://en.wikipedia.org/wiki/Procedural_programming), [function-based](https://en.wikipedia.org/wiki/Functional_programming), or [data-oriented](https://en.wikipedia.org/wiki/Data-driven_programming) than what you're used to.

Here's the same task written in an OOP style in Java and a procedural style in C.

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

> **Why is C written this way ?** C has no classes or methods. A `struct` groups data, and behavior lives in plain functions that are kept separate from that data. Notice that `take_damage` receives `&player`, the address of the struct. C passes arguments by value, so without the pointer the function would only get a copy, and the original `health` would stay untouched.

This gives you more control over how data is stored, accessed, and changed. Instead of piling up layers of abstraction, you can see exactly what gets passed around, where it lives in memory, and how the different parts of your program touch it.

> None of this means OOP is bad or something to avoid. It's used heavily in C++, especially in game development, graphics, simulations, and large software projects. Just don't treat it as the default answer to every problem.

Once you're comfortable with memory, data representation, and program flow, you can look into other programming styles and see where each one makes sense.

After that, keep following the roadmap and build up your low-level knowledge step by step.

---

## How to Learn ?
 
Learning low-level programming is not always easy. At some point you'll be stuck on a bug for hours, confused by a concept, burned out, or wondering why you started this in the first place. That's completely normal, and every programmer has been there. Dealing with hard problems is a big part of becoming a better one.

If you want a more realistic picture of what learning to program looks like, we highly recommend this article:
 
- **[Teach Yourself Programming in Ten Years](https://www.norvig.com/21-days.html)**: A classic that sets realistic expectations about learning programming and explains why getting good takes time, patience, and steady practice.

### Project-Based Learning
 
A very common beginner problem is following a tutorial just fine and then having no clue how to build anything alone. If that sounds like you, try learning through projects.

Pick a topic, learn the basics from one of the resources in this guide, and then build something with it. Using what you learned is where most of the real learning happens.

> For example, if you just learned about linked lists, write one yourself in C. If you're learning about memory allocation, try building a simple memory allocator.

Whenever you can, try to solve the problem yourself before hunting for a tutorial with the exact answer. Documentation is fine for syntax and technical details, but give the problem some thought first. Once you've built something, compare your solution with other people's and see what you can pick up from them.

> Watch out for tutorial hell, too. It's very easy to burn hours watching videos, reading articles, and bookmarking resources without writing a single line of code. Tutorials help you understand concepts, but they can't replace hands-on practice. 

Stick to the fundamentals, build small projects, and write your own code. Your first attempts will probably not be great, and that's fine. What matters is that you start, make mistakes, and get a little better each time.
 
### Using AI Tools
 
AI can be a good learning aid, as long as you treat it as a tool and not a shortcut. When you hit a problem, spend some time on it yourself before asking. Struggling is frustrating, but it's also where a lot of the learning happens.

It works best for explaining concepts, making sense of error messages, pointing out flaws in your reasoning, or nudging you toward a solution. You can also use it like Google for syntax, API details, documentation, and quick explanations.

Try not to ask it to write the entire program or solve the problem from start to finish, because then you only get the answer and skip the understanding.

> Use AI to support your learning, not to replace the thinking and problem-solving that actually make you a better programmer.

---

## What is Low-Level Programming ?

<p align="center">
  <img width="4139" alt="Untitled-2026-08-25-2028" src="https://github.com/user-attachments/assets/8c9d045b-edb1-46d5-91dd-558e0dd53737" />
</p>

The diagram shows the layers between the programmer and the hardware. At the very bottom sits the hardware itself, the physical circuits that execute instructions. Above it is [machine code](https://en.wikipedia.org/wiki/Machine_code), the binary encoding of the instructions defined by the CPU's instruction set architecture (ISA). Then comes assembly, a readable text form of those same instructions, and above that the programming languages, which compilers or interpreters eventually translate down into machine code. The higher you go, the more hardware detail gets hidden behind abstractions, which makes programming easier but also takes away some of your control over what's happening underneath.

[Low-level programming](https://en.wikipedia.org/wiki/Low-level_programming_language) means working closer to the machine and understanding what really goes on across these layers. Instead of leaning on abstractions, you deal more directly with [memory](https://en.wikipedia.org/wiki/Computer_memory), the [CPU](https://en.wikipedia.org/wiki/Central_processing_unit), and other hardware resources.

That's why people say it's "close to the hardware." Assembly and C are the classic examples, and modern languages like C++, Rust, Zig, and Odin are also widely used for low-level and systems work, each with its own trade-offs between control, safety, and abstraction.

> Low-level programming shows up wherever performance, efficiency, and hardware control matter. Think operating systems, embedded systems, firmware, device drivers, compilers, game engines, graphics, networking, and other performance-critical software, where programmers often need precise control over memory, hardware, and how the system behaves.

---

## Low-Level Programming vs System Programming

A common misconception is that low-level programming and systems programming are the same thing. They're closely related and overlap a lot, but they're two different ideas.

Low-level programming is about how close your code is to the hardware. It deals with memory, CPU instructions, pointers, registers, and data representation, so it's basically about understanding and controlling what happens underneath the abstractions of higher-level languages.

[Systems programming](https://en.wikipedia.org/wiki/Systems_programming) is about the kind of software you're building: software that supports, manages, or provides services for other software. Operating systems, compilers, databases, device drivers, runtimes, networking software, and servers all fall in here.

Since many system-level programs need direct hardware access and careful resource management, the two often overlap. Writing an operating system kernel in C, for example, is both. But not all systems programming has to be low-level, because modern languages can build system software with more abstraction, safety, or convenience.

> A simple way to remember it: low-level programming describes how close your code is to the hardware, while systems programming describes what kind of software you're building.

> **What this wiki focuses on:** The area where the two overlap, which is **low-level systems programming**. Think operating systems, compilers, runtimes, and the other software that sits right on top of the hardware and keeps everything else running. [Bare metal programming](https://en.wikipedia.org/wiki/Bare_machine) is low-level too. Your code runs directly on the hardware with no operating system underneath, which usually means firmware for a microcontroller: startup code, linker scripts, and talking to peripherals through memory-mapped registers. It's a path of its own, and we're not going to focus on it here. From this point on, whenever you see the words "low-level" in this wiki, read them as low-level systems programming.

- **[What is Systems Programming, Really ?](https://willcrichton.net/notes/systems-programming/):** A beginner-friendly article on what systems programming actually means and how it differs from low-level programming.

---

## Why Learning C is Important ?
 
If you're interested in low-level programming, [C](https://en.wikipedia.org/wiki/C_(programming_language)) is one of the best places to start. It's over 50 years old and still one of the most important and widely used languages in the world, and a lot of the ideas and tools programmers use today trace back to it.

A few reasons C still matters:
 
- **C runs almost everywhere**. Tiny microcontrollers, embedded devices, desktop apps, servers, operating systems, you name it. You'll find C on nearly every kind of computer.
- **C is efficient and lightweight**. It maps closely to what the machine actually does and has a tiny runtime, with no garbage collector and no hidden allocations. That makes it easy to predict roughly what code the compiler will generate and how much memory your program uses, which is exactly what you want in performance-critical and resource-limited systems.
- **C has a simple, stable ABI**. Almost every other language can call into C libraries, which is why so many libraries and system interfaces, including the system calls of most operating systems, are exposed as C APIs.
- **C is flexible**. It doesn't force a particular style or paradigm on you, so you can structure your program in whatever way fits the problem.
- **C puts very few restrictions on style**. It doesn't push any ideology, and as a result there are very few kinds of programs that can't be written in it.
- **A huge amount of software is built on C**. Many programming languages, operating systems, databases, compilers, and developer tools are written in C or heavily influenced by it. Even Python, Ruby, PHP, and Perl run on implementations that are mostly written in C or C++.
 
C also teaches you to be careful. It gives you a lot of power and freedom, and with that comes responsibility, because small mistakes can turn into serious problems if you're not paying attention. You'll run into things like [invalid memory access](https://en.wikipedia.org/wiki/Out_of_memory), [buffer overflows](https://en.wikipedia.org/wiki/Buffer_overflow), [memory leaks](https://en.wikipedia.org/wiki/Memory_leak), [undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior), and [pointer related bugs](https://en.wikipedia.org/wiki/Stale_pointer_bug).

Learning to avoid these makes you think a lot harder about how memory, data, and system resources are used.
 
> In many ways C is a great teacher. It hides less from you than higher-level languages, and mistakes tend to have visible consequences. That can be annoying, but it builds strong debugging skills and better habits.

C is also valuable because of how much it influenced everything else. Many modern languages borrowed ideas, syntax, and design choices straight from it.
 
> By learning C, you'll understand why a lot of modern language features exist in the first place, and you'll see what's going on behind the scenes, which is usually hidden when you work in higher-level languages like Python, JavaScript, or Java.

---
 
## C vs C++ in Low-Level Programming

Stroustrup explains that modern C and modern C++ are better seen as [sibling languages](https://www.stroustrup.com/siblings_short.pdf#:~:text=C%2B%2B%20is%20a%20descendant%20of%20K%26R%20C.,%2B%20%2B%209%208%20C%208%209) than as one being the newer version of the other. They share a common ancestor in K&R C, but they've grown in different directions since.

This matters because C++ never simply adopted modern C versions like C99 or C11. The two still share a lot of concepts and history, but they've developed separately, which is why modern C and modern C++ can behave quite differently even when the code looks almost identical. A classic example is `int *p = malloc(n);`, which is perfectly fine in C but an error in C++, where `void *` doesn't convert to other pointer types implicitly and you need an explicit cast.

Seeing them as siblings also helps when you're deciding which one to learn. You'll often hear "learn C before C++," especially for low-level work, and the reasoning is that C shows you much more of what's happening under the hood.

C has relatively few abstractions, so you're pushed to understand memory, pointers, strings, and data representation instead of letting language features handle them for you. That makes it a good way to learn how programs really work.

C++ gives you many more abstractions and tools, which make development easier. Classes, templates, RAII, and the standard library let you build bigger and more complex software without writing everything yourself. The catch is that you can use all of it without fully understanding what's going on underneath.

That doesn't make C++ automatically high-level, though. One of its strengths is that you choose how much abstraction to use. You can write code that's very close to C when you need direct control, or reach for higher-level features when they make sense.

> Both C and C++ are powerful and widely used for low-level work, and neither is better in every situation.

So, do you have to learn C before C++ ?

Not at all.

If C++ interests you more, it's perfectly fine to start there. You don't need to master C first. Just make sure you understand what C++ is built on, like memory, pointers, data layout, and how programs interact with the system.

Starting with C and moving to C++ later works too. Learning C first can make it easier to see what C++ abstractions are doing behind the scenes, but there's no rule about it, especially if C++ is what you really want to learn.
 
---

## Let's Gooo !
 
Now that you have a rough idea of what low-level programming is, it's time to start learning. We're not going to start with building an operating system on day one. We begin with a little electronics, take a first look at assembly, then cover the computer fundamentals, and slowly work our way up from there.

Take your time with the roadmap. Low-level programming is a broad field, and it's normal for some topics to take longer than others. Focus on actually understanding the fundamentals instead of rushing through them.

Each section in the roadmap starts with a short explanation, followed by a list of recommended resources. They're mostly in priority order, so start with the first one and work down the list when you need more.

Depending on the topic, some sections put a book before the official website, while others start with the official docs or references. Follow the order given, and use the extra resources whenever you want another explanation or a deeper look.

> One of the most useful skills a programmer can have is finding and understanding information on their own. Tutorials are great, but they shouldn't be your only way of learning. Get comfortable reading documentation, researching topics, trying things in code, and figuring stuff out yourself, because that will help you long after you finish this roadmap.
 
---
 
# Roadmap
 
<p align="center">
  <img width="300" alt="Roadmap" src="https://github.com/user-attachments/assets/e390e835-4b3a-4410-8399-46203d300b8e" />
</p>

## 1. Basic Electronics
 
You don't need deep knowledge of electronics before learning C or low-level programming. A basic understanding is more than enough.

Nobody expects you to become an electrical engineer here. Get comfortable with voltage and current, [logic gates](https://en.wikipedia.org/wiki/Logic_gate), and how gates combine into [digital circuits](https://en.wikipedia.org/wiki/Electronic_circuit#Digital_circuits). It also helps to understand the difference between combinational circuits, where the output depends only on the current inputs (an adder, for example), and sequential circuits, which hold state in flip-flops and change on a clock signal. Registers and memory are built from the second kind, and a CPU is essentially both kinds wired together, which makes it much easier to see what the machine is really doing underneath.

- **[MIT OpenCourseWare: Circuits & Electronics](https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/)** 
- **[Nand2Tetris](https://www.nand2tetris.org/)**

## 2. Assembly

Once you've seen how gates and circuits work, the next question is how a CPU gets told what to do with them. [Assembly](https://en.wikipedia.org/wiki/Assembly_language) is the answer. Every CPU family defines an instruction set architecture (ISA), which is the set of instructions, registers, and memory rules that software can use, and [machine code](https://en.wikipedia.org/wiki/Machine_code) is the binary encoding of those instructions. Assembly is the readable text form of that encoding. Most assembly instructions map one to one to a machine instruction, although an assembler also gives you labels, directives, macros, and sometimes pseudo-instructions that expand into real ones. Either way, there's very little standing between you and the hardware.

How much assembly you need depends on where you end up. Some fields, like game engines, graphics, or network programming, don't ask for heavy assembly knowledge to get started, and you can get pretty far reading it only when you're debugging or chasing performance. Low-level systems programming as a whole is a different story. Assembly is part of the territory there: a kernel's bootloader, context switching, and interrupt entry code can only be written in it, compilers generate it, and tracking down a nasty crash or a security bug often means reading it. Since that's what this wiki is about, it comes early in the roadmap.

> **Why isn't this part of Computer Fundamentals ?** Computer fundamentals covers the ideas: how data is represented, how a CPU fetches, decodes, and executes instructions, how memory is organized. Those ideas hold on every machine, and you mostly pick them up by reading and thinking. Assembly is a hands-on skill tied to one specific ISA, with its own syntax, its own tooling (an assembler, a linker, a debugger like GDB), and its own conventions. x86-64, ARM, and RISC-V differ enough in design and conventions that each one needs its own resources, and that doesn't fit inside a fundamentals section.

> Assembly is not portable. Every ISA has its own instructions, registers, and conventions, and even on the same ISA the calling convention can change between operating systems (System V on Linux versus Microsoft x64 on Windows, for example). Pick one to start with instead of trying to learn them all at once. The core ideas carry over, which makes the second one much easier.

Learn the basics here first, then once you reach C a couple of steps later, come back and write small C programs and compare them with the assembly the compiler produces. Compiling with `gcc -S` gives you the assembly directly, and Compiler Explorer shows it side by side with your code. Change the code a bit, watch how the output changes, and ask yourself why. After a while you'll have a pretty good idea of what the compiler does for you behind the scenes.

- **[Compiler Explorer](https://godbolt.org/)**

### x86-64

x86-64 is the 64-bit extension of the x86 line that goes all the way back to the 8086, and it's what runs inside most desktops, laptops, and servers. It's the most common place to start since you probably already own a machine with it, and there's a huge pile of tutorials, books, and tools to go with it. It's a CISC design with variable-length instructions (1 to 15 bytes) and decades of backward compatibility, which is why it can look messy at first. You only need a small part of it to get going. Also keep in mind that there are two assembly syntaxes, Intel and AT&T. The manuals use Intel, while GNU tools default to AT&T unless you switch them, so check which one a resource is using.

- **[Intel Software Developer Manuals](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html)**
- **[x86-64 Assembly Language Programming with Ubuntu](https://www.egr.unlv.edu/~ed/x86.html)**
- **[x86 and amd64 Instruction Reference](https://www.felixcloutier.com/x86/)**
- **[Programming from the Ground Up](https://savannah.nongnu.org/projects/pgubook/)**

### ARM

ARM powers almost every phone and tablet, Apple Silicon Macs, the Raspberry Pi, and most microcontrollers. It's a good pick if you own one of those devices or you're leaning toward embedded systems. ARM is a RISC design with a load/store architecture, meaning arithmetic works on registers only and separate load and store instructions move data to and from memory. AArch64 also uses fixed-width 32-bit instructions and has 31 general-purpose registers, which makes it fairly clean and regular, and many beginners find it easier to read than x86.

> ARM comes in more than one flavor. 64-bit ARM (AArch64) is what you find in phones, Macs, and servers, while 32-bit ARM, especially Cortex-M with the Thumb instruction set, is common on microcontrollers. Check which one a resource teaches before you dive in.

- **[ARM Assembly Basics (Azeria Labs)](https://azeria-labs.com/writing-arm-assembly-part-1/)**
- **[Arm Architecture Reference Manual](https://developer.arm.com/documentation/ddi0487/latest)**

### RISC-V

RISC-V is an open instruction set that anyone can implement without paying license fees. It's also a RISC, load/store design, but it's built as a small base plus optional extensions. The base integer ISA (RV32I or RV64I) is tiny, and extensions add things like multiplication and division (M), atomics (A), floating point (F and D), and compressed instructions (C). That modularity is a big part of why it's so pleasant to learn from, and why it shows up in everything from microcontrollers to research CPUs. If you want to understand how an instruction set is designed in the first place, RISC-V is a great one to study.

> You don't need a RISC-V board to start. Simulators and emulators like QEMU let you run RISC-V programs on your normal computer.

- **[RISCV Learn](https://github.com/riscv/learn)**

## 3. Computer Fundamentals
 
With some electronics and assembly behind you, start building a strong base in computer fundamentals. This is one of the most important parts of the roadmap, since a lot of low-level concepts are built on top of it. You've already bumped into things like registers and the ISA in the assembly section, so this is where you learn why they work the way they do.

Learn how data is represented (two's complement for signed integers, IEEE 754 for floating point, endianness, alignment), how the CPU fetches, decodes, and executes instructions, and how memory is organized, from registers and [caches](https://en.wikipedia.org/wiki/Cache_(computing)) down to RAM, storage, and virtual memory. The deeper you go, the more things like binary, [microarchitecture](https://en.wikipedia.org/wiki/Microarchitecture), [ISA](https://en.wikipedia.org/wiki/Instruction_set_architecture), [registers](https://en.wikipedia.org/wiki/Processor_register), and instruction execution will matter.

> The better you understand how a computer works inside, the easier it is to see what happens when your code runs. Plenty of confusing low-level concepts start making sense once these fundamentals are in place.

- **[Exploring How Computers Work](https://www.youtube.com/watch?v=QZwneRb-zqA)**
- **[Computer Systems: A Programmer's Perspective](https://www.amazon.com/dp/9332573905/)**
- **[The Hidden Language of Computer Hardware and Software](https://charlespetzold.com/code/)**
- **[Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/)**
 
## 4. C Programming

<img width="150" alt="c_512x512" src="https://github.com/user-attachments/assets/4b52552b-d591-4bf8-9d59-64f2e86d61cc" />
 
Once you understand the basics of how computers work, it's time to learn C. As you go, pay attention to pointers and pointer arithmetic, arrays, structs (including padding and alignment), memory allocation, stack versus heap, data representation, bitwise operations, and undefined behavior, since these topics are the foundation for low-level programming. Having seen some assembly already, you'll find it easier to picture what a pointer or a stack frame really is.

Try to look past what your code does and ask how it actually works. Where is the data stored ? What happens in memory when a function is called ? How does the program read and change data? Thinking this way gets you far more out of C than just memorizing the syntax.

- **[All Resources of C Language](https://www.c-language.org/resources)**
- **[Beej's Guide to C Programming](https://beej.us/guide/bgc/)**
- **[C FAQ](https://c-faq.com/)**
- **[Dive into Systems](https://diveintosystems.org/book/)**
- **[C Interfaces and Implementations](https://github.com/drh/cii)**
 
## 5. Practice Data Structures & Algorithms
 
Once you're comfortable writing programs in C, start learning data structures and algorithms (DSA). They're the tools you use to organize data and solve problems efficiently.

Start with the common data structures like [arrays](https://en.wikipedia.org/wiki/Array_(data_structure)), [linked lists](https://en.wikipedia.org/wiki/Linked_list), [stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)), [queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)), [hash tables](https://en.wikipedia.org/wiki/Hash_table), [trees](https://en.wikipedia.org/wiki/Binary_tree), [heaps](https://en.wikipedia.org/wiki/Heap_(data_structure)), and [graphs](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)). Next to them, pick up the key algorithm ideas like [searching](https://en.wikipedia.org/wiki/Search_algorithm), [sorting](https://en.wikipedia.org/wiki/Sorting_algorithm), [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)), [traversal techniques](https://en.wikipedia.org/wiki/Tree_traversal), and general problem-solving strategies.

> DSA doesn't depend on any language, so you can learn the core ideas in whatever you like. Since this roadmap is about low-level programming, though, resources that teach it in C will usually serve you better.

> Low-level work adds one more thing to keep in mind: how your data is laid out in memory. Big-O tells you how an algorithm scales, but on a real CPU, cache locality matters a lot too. A contiguous array is often much faster to traverse than a linked list, even when the textbook complexity looks the same or worse for the array.

- **[MIT 6.006: Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)** 
- **[CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/index.html)**
- **[Analysis of Algorithms Lectures](https://www3.cs.stonybrook.edu/~skiena/373/videos/)**
- **[Notes on Data Structures and Programming Techniques](https://cs.yale.edu/homes/aspnes/classes/223/notes.html)**
- **[Algorithms for Competitive Programming](https://cp-algorithms.com/)**
- **[Algorithms Design in C](https://www.ime.usp.br/~pf/algorithms/)**
- **[C DSA interactive Suite](https://github.com/darshan2456/C_DSA_interactive_suite)**
- **[Algorithms (Sedgewick & Wayne)](https://algs4.cs.princeton.edu/home/)**
- **[Algorithm Books](https://github.com/0bprashanthc/algorithm-books/tree/master)**
 
## 6. Build Small Projects
 
Once you feel good about C and have some experience with data structures and algorithms, start building small projects of your own. This is where everything you've learned finally comes together.

Reading about concepts is important, but you only really understand them once you use them. Writing your own programs forces you to make decisions, fix errors, and think about memory, data structures, design, and how your code behaves. Don't be afraid to experiment. Try different approaches, break things, fix them, and learn from it, because that's how most programmers get better.

Here's a small shell project you can try once the fundamentals feel comfortable. It doesn't have to be perfect, so just start building. 

- **[AMUNIX : Custom Unix Shell Guide](https://github.com/Cryogenicboom/Amunix/blob/main/docs/Part0.md)**

## 7. Learn Modern Low-Level Languages (Optional)
 
After you've built a good foundation with C and finished a few projects, you can start exploring other low-level languages. Popular choices are C++, Rust, Zig, and Odin, and each one strikes its own balance between performance, control, safety, and developer experience.

Pick one or two that interest you and learn them alongside C. And if you enjoy C, it's completely fine to stay with it, since it's still one of the most important languages in low-level programming and is widely used in the industry. Other languages can give you a fresh perspective, but you don't need them to become a good low-level programmer.

### Procedural Languages

#### C++

<img width="150" alt="cpp_logo" src="https://github.com/user-attachments/assets/3ed8fce0-cc22-48ae-bde1-3d136f6f4ad1" />

[C++](https://en.wikipedia.org/wiki/C%2B%2B) adds powerful abstraction tools like classes, templates, and RAII to low-level programming while still giving you a lot of control over memory, performance, and hardware details.
 
> C++ keeps evolving, so many old tutorials, books, and videos teach outdated methods or older versions of the language. If you're starting today, stick to modern C++, meaning standards like C++17, C++20, and C++23, since that's how the language is actually used now.

- **[LearnCpp](https://www.learncpp.com/)**
- **[Programming: Principles and Practice Using C++](https://www.amazon.com/dp/0138308683)**
- **[A Tour of C++](https://www.amazon.com/dp/013681648)**
- **[Cppreference](https://en.cppreference.com/)**
- **[Data-Oriented Design Resources](https://github.com/dbartolini/data-oriented-design)**

#### Rust

<img width="150" alt="rust-logo-512x512" src="https://github.com/user-attachments/assets/86e703e4-ff32-44c2-9e65-4dc8af1093c7" />

[Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) is built for systems programming. Its ownership and borrowing rules are checked at compile time, which gives you memory safety and data-race freedom without a garbage collector.

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
- **[Rust OsDev](https://rust-osdev.com/)**

#### Zig

<img width="150" alt="zig-programming-language-icon" src="https://github.com/user-attachments/assets/fa4257a9-5645-48a2-ae13-6657c2710d0a" />

[Zig](https://en.wikipedia.org/wiki/Zig_(programming_language)) goes for explicit control and predictable behavior, with no hidden control flow and no hidden allocations. It also has compile-time code execution (`comptime`) and can build and link C code directly, so it works well alongside existing C projects.

- **[Zig Learn](https://ziglearn.org/)**
- **[Zig Language Reference](https://ziglang.org/documentation/master/)**
- **[Ziglings](https://codeberg.org/ziglings/exercises)**
- **[Learning Zig](https://pedropark99.github.io/zig-book/)**
- **[Awesome Zig](https://github.com/zigcc/awesome-zig)**

#### Odin

<img width="150" alt="odin" src="https://github.com/user-attachments/assets/0d3d6347-2da6-4545-9a8c-391259d70d93" />

Odin is a systems programming language built around simplicity and data-oriented design. It uses manual memory management with explicit allocators, and it ships with built-in vector and matrix types, which makes it popular for games and graphics work.

- **[Odin Overview](https://odin-lang.org/docs/overview/)**
- **[Odin Demo Program](https://github.com/odin-lang/Odin/blob/master/examples/demo/demo.odin)**
- **[Understanding the Odin Programming Language](https://odinbook.com/)**
- **[Learn Odin in Y Minutes](https://learnxinyminutes.com/odin/)**
- **[Awesome Odin](https://github.com/jakubtomsu/awesome-odin)**
 
If you're curious about other ways of thinking about programming, you can also try some less common languages like Ante, Carp, Futhark, and Forth. They'll show you ideas that look nothing like what you see in C.

### Non-Procedural Languages

#### Ante
A functional systems language inspired by ML, with Rust-inspired memory management.
- **[Ante Lang](https://antelang.org/)**

#### Carp
A LISP made for game development, with Rust-inspired memory management and low-level control.
- **[Carp Lang](https://github.com/carp-lang/Carp)**

#### Futhark
An ML-style functional language for high-performance parallel computing on GPUs, with CUDA, HIP, and OpenCL backends.
- **[Futhark Lang](https://futhark-lang.org/)**

#### Forth
A stack-based language that works well for embedded programming and direct hardware control.
- **[Awesome Forth](https://github.com/lassik/awesome-forth)**
 
> If "procedural" and "non-procedural" sound confusing, don't sweat it for now. Procedural languages like C are mostly a list of steps telling the computer exactly what to do. Other models, like functional or stack-based programming, solve problems differently and can give you a fresh view on how programs can be designed.

The point of learning extra languages is to deepen your understanding of programming and pick up new ways to think about problems. Someone with strong fundamentals can usually learn a new language quickly when they need to.
 
## 8. Pick a Specialized Field
 
By now you should have a solid base in electronics, assembly, computer fundamentals, C, data structures and algorithms, and some hands-on project experience. From here you can start exploring the specific area of low-level programming that interests you most.

There's no rush to specialize. Many beginners jump into advanced topics too early, before the fundamentals are solid, and end up struggling. A strong base makes the specialized topics much easier later on.
 
### Which Field to Pick ?

If you're new to low-level programming, it's hard to tell where to start. There are plenty of specializations, and each one focuses on a different part of computers and software. A good way to narrow it down is to follow what interests you, whether that's a language you enjoy, a field that sounds exciting, or a wish to work closer to the hardware. Start somewhere and adjust as you figure out what you like.
 
#### Following the Language You Like

An easy way to explore fields is to start from a language you already enjoy. Different areas tend to favor certain languages, and many of them have a few that are basically the industry standard.

> For example, if you enjoy writing C++, you might like Game Engine Development, Graphics Programming, or GPGPU and Parallel Computing, since C++ is used heavily in those fields. Instead of forcing yourself to pick a specialization first, you can look at where your favorite language is commonly used and explore from there.

#### Following How Close You Want to Be to Hardware

Another way is to think about how much you want to deal with real hardware and electronics.

Some areas need very little electronics knowledge, while others need a deep understanding of digital logic, computer architecture, and hardware design. In general, the closer a field is to the hardware, the more you'll need to know about how electronic systems work.

> For example, Embedded Systems and FPGA Programming sit much closer to the hardware layer, so they usually need a stronger understanding of electronics.

#### Following Your Interests

Frankly, we think this is the least stressful approach for beginners.
You don't need to pick a specialization right away, and you don't need to master every fundamental before starting something fun. If a field catches your eye, start building small projects and learn as you go. Every time you hit a concept you don't understand, that's your chance to learn it.

Your interests will probably change over time anyway, and that's totally normal. Plenty of people start in one area and later find another one they enjoy even more.

You also don't have to lock yourself into one path from day one. Pick something that looks fun, keep building things, and let your interests guide you as you gain experience.

### Low-Level Programming Fields

#### 1. Embedded Systems

Embedded programming means writing software for devices built to do specific jobs, like microcontrollers, robots, car systems, IoT devices, and industrial equipment. Unlike desktop or web development, you'll often work very close to the hardware, where memory, processing power, and energy are all limited.

You'll mostly use C and C++, and Rust is becoming more popular in some projects. You'll work with microcontrollers like STM32, ESP32, AVR, and ARM Cortex-M, and deal with GPIO, hardware registers, interrupts, timers, DMA, and protocols such as UART, SPI, I²C, and CAN.

> Depending on the project, you may also use sensors, motors, displays, wireless modules, and RTOSes like FreeRTOS or Zephyr. Tools like JTAG, SWD, logic analyzers, and oscilloscopes are common for debugging and testing. Assembly (especially ARM) also shows up a lot, in startup code, interrupt handlers, and debugging.

- **[Awesome Embedded](https://github.com/nhivp/Awesome-Embedded)**
- **[Awesome Embedded Linux](https://github.com/fkromer/awesome-embedded-linux)**

---

#### 2. Compilers & Interpreters

Compiler and interpreter development is about understanding what happens behind the scenes when you write and run code. Instead of building apps, you build the tools that read programming languages and turn them into something a computer can run.

You'll learn about lexers, parsers, Abstract Syntax Trees (ASTs), type systems, semantic analysis, Intermediate Representations (IRs), optimizations, and machine code generation, and you'll see how source code passes through several stages before it becomes a program you can run.

> The tech stack often includes languages like C++, Rust, C, OCaml, and Java, along with tools like LLVM, Clang, GCC, MLIR, ANTLR, Flex, and Bison. You may also come across virtual machines, bytecode, JIT compilers, garbage collectors, and CPU architectures like x86-64, ARM, and RISC-V. Knowing assembly is very useful here, since code generation targets it directly.

- **[Awesome Compilers](https://github.com/aalhour/awesome-compilers)**

---

#### 3. Operating Systems Development

Operating systems development is one of the closest software fields to the hardware. You build the software layer between applications and the machine, which manages the CPU, memory, storage, and devices, and working in it gives you a much deeper understanding of how computers really work.

You'll commonly use C, C++, Rust, and sometimes Assembly. You'll learn about memory management, virtual memory, process and thread scheduling, interrupts, system calls, file systems, device drivers, synchronization, concurrency, and kernel design. You'll also come across architectures like x86-64, ARM, and RISC-V, and concepts like paging, context switching, bootloaders, and hardware abstraction layers.

> Many OS developers study or contribute to projects like Linux, FreeBSD, Windows internals, Minix, or hobby operating systems. For debugging, tools like GDB, QEMU, Bochs, and kernel debuggers are common. Some parts of a kernel, like the bootloader, context switching, and interrupt entry code, can only be written in assembly.

- **[Awesome OS Dev](https://github.com/devse-org/awesome-osdev)**

---

#### 4. GPGPU & Parallel Computing

GPGPU (General-Purpose Computing on Graphics Processing Units) means using GPUs for more than drawing graphics. Instead of rendering images, you use the GPU for large calculations that can be split into thousands or even millions of small tasks running at the same time.

You'll commonly work with CUDA, OpenCL, SYCL, HIP, and C++, and learn about parallel programming, threads, warps, kernels, shared memory, memory bandwidth, vectorized computation, and GPU architecture. The usual hardware is NVIDIA, AMD, and Intel GPUs, often paired with powerful CPUs.

> GPGPU is widely used in scientific computing, physics simulations, machine learning, AI, image processing, financial modeling, and other work that needs a lot of computation. Since GPUs have many small cores running tasks in parallel, they can be much faster than CPUs for certain problems.

- **[Awesome GPGPU](https://github.com/jslee02/awesome-gpgpu)**
- **[Awesome GPU](https://github.com/Jokeren/Awesome-GPU)**

---

#### 5. Graphics Programming

Graphics programming sits between programming, math, and GPU hardware. It covers creating and rendering visual content, from simple 2D graphics to realistic 3D worlds in games, simulations, VR, and visualization software. You'll learn how data turns into pixels on the screen and how GPUs render complex scenes efficiently.

You'll commonly use C++ with graphics APIs like Vulkan, OpenGL, DirectX 12, and sometimes Metal. You'll come across rendering pipelines, vertex transformations, cameras, lighting, textures, materials, shadows, animation, rasterization, and ray tracing, and you'll write shaders in languages like GLSL and HLSL that run directly on the GPU.

> Graphics programming leans heavily on math like linear algebra, vectors, matrices, transformations, and geometry. You'll work closely with GPUs from NVIDIA, AMD, and Intel, and learn how to speed up rendering and use graphics resources well. It's used in game engines, 3D modeling software, VR/AR apps, scientific visualization, CAD software, simulations, and modern user interfaces.

- **[Awesome Graphics Programming](https://nira-community.github.io/awesome-graphics)**

---

#### 6. Game Engine Development

Game engine development is one of the broadest areas in low-level programming because it mixes so many fields into one system. Instead of building a whole game, you build the technology games run on. An engine handles graphics, physics, audio, input, memory management, and plenty more, all working together.

You'll mainly work with C++, and sometimes C#, Rust, or scripting languages like Lua. You'll come across rendering, physics, audio, animation, resource management, entity-component systems (ECS), memory allocators, multithreading, scripting, and asset pipelines. Graphics APIs like Vulkan, DirectX, and OpenGL are common, along with math like vectors, matrices, transformations, and collision detection.

> Game engine developers often work with technologies found in engines like Unreal Engine, Unity, Godot, Source Engine, or custom engines. The field also overlaps with graphics programming, physics simulation, networking, tools development, and performance optimization.

- **[Awesome Game Engine Dev](https://github.com/stevinz/awesome-game-engine-dev)**
- **[Awesome Game Engines](https://github.com/ChessMax/awesome-game-engines)**

---

#### 7. Network Systems Programming

Network systems programming is about how computers talk to each other and exchange data over networks. Instead of building websites or user interfaces, you work on the systems underneath that let devices, servers, and apps send, receive, and process data efficiently. It's used in everything from web servers and cloud infrastructure to multiplayer games and distributed systems.

You'll commonly use C, C++, Rust, and Go. You'll work with sockets, TCP/IP, UDP, HTTP, WebSockets, DNS, TLS/SSL, packet transmission, routing, and load balancing, plus systems topics like asynchronous programming, multithreading, concurrency, event loops, epoll, io_uring, and performance tuning.

> The tech stack often includes Linux networking, Nginx, HAProxy, Wireshark, gRPC, Redis, Kafka, and cloud platforms. You'll spend a lot of time analyzing network traffic, handling thousands or even millions of connections, reducing latency, and making sure distributed systems talk to each other reliably.

- **[Awesome Networking](https://github.com/facyber/awesome-networking)**
- **[Awesome Computer Networking](https://github.com/nyquist/awesome-networking)**
- **[Awesome Network Programmability](https://github.com/cisco-ie/awesome-network-programmability)**
- **[Awesome Game Networking](https://github.com/rumaniel/Awesome-Game-Networking)**

---

#### 8. Cybersecurity

Cybersecurity is about protecting computer systems, networks, applications, and data from attacks, vulnerabilities, and unauthorized access. Instead of mainly building features for users, you learn how systems can be secured, how attackers find weaknesses, and how those weaknesses can be found and fixed.

You'll commonly work with Linux, Windows internals, C, C++, Python, Rust, and scripting languages like Bash or PowerShell. Topics include network security, operating system security, cryptography, secure coding, authentication, authorization, malware analysis, reverse engineering, binary exploitation, digital forensics, incident response, and vulnerability assessment.

> The tech stack often includes tools like Wireshark, Nmap, Burp Suite, Metasploit, Ghidra, IDA Pro, Sysinternals, John the Ripper, Hashcat, and different SIEM platforms. You'll also learn about protocols like TCP/IP, DNS, HTTP/HTTPS, and TLS, and how attackers and defenders deal with modern computer systems. Reverse engineering and binary exploitation in particular require you to be comfortable reading assembly.

- **[Pwn College](https://pwn.college/)**
- **[SEED Labs](https://seedsecuritylabs.org/)**
- **[ROP Emporium](https://ropemporium.com/)**
- **[OpenSecurityTraining2](https://opensecuritytraining.info/)**
- **[Awesome Infosec](https://github.com/onlurking/awesome-infosec)**
- **[Awesome List](https://github.com/0xor0ne/awesome-list)**

---

# Recommended Creators

A collection of creators who cover topics related to low-level programming.

> Learn from these creators by watching their videos, following their projects, and studying their code and how they solve problems. Treat them like mentors and learn from their experience.

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
- **[Kay Lack](https://www.youtube.com/@neoeno4242)**
- **[Dave's Garage](https://www.youtube.com/@DavesGarage)**
- **[Low Level](https://www.youtube.com/@LowLevelTV)**
- **[LiveOverflow](https://www.youtube.com/@LiveOverflow)**

---

# Discord

Join our Discord server if you need help, want to learn low-level programming, or would like to contribute to the megathread.

  <a href="https://discord.gg/YZRknMKn2K">
   <img width="200" alt="Nira" src="https://github.com/user-attachments/assets/ceb562e0-5434-4773-ba6f-386d53b83e63" />
  </a>

---

# License

This project is released under the **CC0 1.0 Universal** license, placing the content in the public domain where legally possible.

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
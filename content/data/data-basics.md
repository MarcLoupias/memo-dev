# data - basics

## difference between data and information

Computers need data. Humans need information.

Data is a building block. Information gives meaning and context.

Example :

`20180101` is the raw data. It is a suite of 8 numbers.

Interpreted as a date it is the 1st january 2018.

It could be also a transaction amount of around 20 millions (euros ? dollars ?).

It could be a (bad) password, it could be a lot of things.

To become an information, the data need context.

## anglicismes

Beaucoup de confusions terminologiques sont faites en français du fait de mauvaises traductions qui affectent le sens.

### digital et numérique

Par exemple *digit* en anglais signifie *chiffre*.

Ce qui conduit certaines personnes à parler de *digital* au lieu de *numérique*.

L'informatisation du monde est le processus de transformation de l'information en nombres, il s'agit donc de numérisation
et non de digital. En français digital se rapporte aux doigts.

### chiffrement et cryptage

Il en va de même pour *chiffrement* et *cryptage* (anglicisme de *encryption*).

### bit et octet

En anglais *bit* se traduit *bit*. Pas de différence.

En revanche *octet* se traduit *byte*.

Un octet étant composé de 8 bits, parler de 10 megabits par seconde n'est pas du tout équivalent à 10 megabytes par seconde !

## data

### bit

The smallest piece of data. Short for binary digit (chiffre binaire).

A bit has a single binary value, either `0` or `1`.

### byte

A byte is a unit of data that is eight binary digits long.

Example, the number `73` in decimal base is `01001001` in binary base.

## data structure

### text

The first data structure for text is the [ASCII (American Standard Code for Information Interchange)](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange)

128 characters available (0 to 127) expressed in a table :

```txt
| Dec | Hexa | Oct | Html     | chr | binary  | description              |
| --- | ---- | --- | -------- | --- | ------- | ------------------------ |
|   0 |    0 |   0 |          | NUL | 0000000 | (null)                   |
|   1 |    1 | 001 |          | SOH | 0000001 | (start of heading)       |
|   2 |    2 | 002 |          | STX | 0000010 | (start of text)          |
|   3 |    3 | 003 |          | ETX | 0000011 | (end of text)            |
|   4 |    4 | 004 |          | EOT | 0000100 | (end of transmission)    |
|   5 |    5 | 005 |          | ENQ | 0000101 | (enquiry)                |
|   6 |    6 | 006 |          | ACK | 0000110 | (acknowledge)            |
|   7 |    7 | 007 |          | BEL | 0000111 | (bell)                   |
|   8 |    8 | 010 |          | BS  | 0001000 | (backspace)              |
|   9 |    9 | 011 |          | TAB | 0001001 | (horizontal tab)         |
|  10 |    A | 012 |          | LF  | 0001010 | (NL line feed, new line) |
|  11 |    B | 013 |          | VT  | 0001011 | (vertical tab)           |
|  12 |    C | 014 |          | FF  | 0001100 | (NP form feed, new page) |
|  13 |    D | 015 |          | CR  | 0001101 | (carriage return)        |
|  14 |    E | 016 |          | SO  | 0001110 | (shift out)              |
|  15 |    F | 017 |          | SI  | 0001111 | (shift in)               |
|  16 |   10 | 020 |          | DLE | 0010000 | (data link escape)       |
|  17 |   11 | 021 |          | DC1 | 0010001 | (device control 1)       |
|  18 |   12 | 022 |          | DC2 | 0010010 | (device control 2)       |
|  19 |   13 | 023 |          | DC3 | 0010011 | (device control 3)       |
|  20 |   14 | 024 |          | DC4 | 0010100 | (device control 4)       |
|  21 |   15 | 025 |          | NAK | 0010101 | (negative acknowledge)   |
|  22 |   16 | 026 |          | SYN | 0010110 | (synchronous idle)       |
|  23 |   17 | 027 |          | ETB | 0010111 | (end of trans. block)    |
|  24 |   18 | 030 |          | CAN | 0011000 | (cancel)                 |
|  25 |   19 | 031 |          | EM  | 0011001 | (end of medium)          |
|  26 |   1A | 032 |          | SUB | 0011010 | (substitute)             |
|  27 |   1B | 033 |          | ESC | 0011011 | (escape)                 |
|  28 |   1C | 034 |          | FS  | 0011100 | (file separator)         |
|  29 |   1D | 035 |          | GS  | 0011101 | (group separator)        |
|  30 |   1E | 036 |          | RS  | 0011110 | (record separator)       |
|  31 |   1F | 037 |          | US  | 0011111 | (unit separator)         |
|  32 |   20 | 040 | `&#32;`  | Spc | 0100000 | (space)                  |
|  33 |   21 | 041 | `&#33;`  | !   | 0100001 |                          |
|  34 |   22 | 042 | `&#34;`  | "   | 0100010 |                          |
|  35 |   23 | 043 | `&#35;`  | #   | 0100011 |                          |
|  36 |   24 | 044 | `&#36;`  | $   | 0100100 |                          |
|  37 |   25 | 045 | `&#37;`  | %   | 0100101 |                          |
|  38 |   26 | 046 | `&#38;`  | &   | 0100110 |                          |
|  39 |   27 | 047 | `&#39;`  | '   | 0100111 |                          |
|  40 |   28 | 050 | `&#40;`  | (   | 0101000 |                          |
|  41 |   29 | 051 | `&#41;`  | )   | 0101001 |                          |
|  42 |   2A | 052 | `&#42;`  | *   | 0101010 |                          |
|  43 |   2B | 053 | `&#43;`  | +   | 0101011 |                          |
|  44 |   2C | 054 | `&#44;`  | ,   | 0101100 |                          |
|  45 |   2D | 055 | `&#45;`  | -   | 0101101 |                          |
|  46 |   2E | 056 | `&#46;`  | .   | 0101110 |                          |
|  47 |   2F | 057 | `&#47;`  | /   | 0101111 |                          |
|  48 |   30 | 060 | `&#48;`  | 0   | 0110000 |                          |
|  49 |   31 | 061 | `&#49;`  | 1   | 0110001 |                          |
|  50 |   32 | 062 | `&#50;`  | 2   | 0110010 |                          |
|  51 |   33 | 063 | `&#51;`  | 3   | 0110011 |                          |
|  52 |   34 | 064 | `&#52;`  | 4   | 0110100 |                          |
|  53 |   35 | 065 | `&#53;`  | 5   | 0110101 |                          |
|  54 |   36 | 066 | `&#54;`  | 6   | 0110110 |                          |
|  55 |   37 | 067 | `&#55;`  | 7   | 0110111 |                          |
|  56 |   38 | 070 | `&#56;`  | 8   | 0111000 |                          |
|  57 |   39 | 071 | `&#57;`  | 9   | 0111001 |                          |
|  58 |   3A | 072 | `&#58;`  | :   | 0111010 |                          |
|  59 |   3B | 073 | `&#59;`  | ;   | 0111011 |                          |
|  60 |   3C | 074 | `&#60;`  | <   | 0111100 |                          |
|  61 |   3D | 075 | `&#61;`  | =   | 0111101 |                          |
|  62 |   3E | 076 | `&#62;`  | >   | 0111110 |                          |
|  63 |   3F | 077 | `&#63;`  | ?   | 0111111 |                          |
|  64 |   40 | 100 | `&#64;`  | @   | 1000000 |                          |
|  65 |   41 | 101 | `&#65;`  | A   | 1000001 |                          |
|  66 |   42 | 102 | `&#66;`  | B   | 1000010 |                          |
|  67 |   43 | 103 | `&#67;`  | C   | 1000011 |                          |
|  68 |   44 | 104 | `&#68;`  | D   | 1000100 |                          |
|  69 |   45 | 105 | `&#69;`  | E   | 1000101 |                          |
|  70 |   46 | 106 | `&#70;`  | F   | 1000110 |                          |
|  71 |   47 | 107 | `&#71;`  | G   | 1000111 |                          |
|  72 |   48 | 110 | `&#72;`  | H   | 1001000 |                          |
|  73 |   49 | 111 | `&#73;`  | I   | 1001001 |                          |
|  74 |   4A | 112 | `&#74;`  | J   | 1001010 |                          |
|  75 |   4B | 113 | `&#75;`  | K   | 1001011 |                          |
|  76 |   4C | 114 | `&#76;`  | L   | 1001100 |                          |
|  77 |   4D | 115 | `&#77;`  | M   | 1001101 |                          |
|  78 |   4E | 116 | `&#78;`  | N   | 1001110 |                          |
|  79 |   4F | 117 | `&#79;`  | O   | 1001111 |                          |
|  80 |   50 | 120 | `&#80;`  | P   | 1010000 |                          |
|  81 |   51 | 121 | `&#81;`  | Q   | 1010001 |                          |
|  82 |   52 | 122 | `&#82;`  | R   | 1010010 |                          |
|  83 |   53 | 123 | `&#83;`  | S   | 1010011 |                          |
|  84 |   54 | 124 | `&#84;`  | T   | 1010100 |                          |
|  85 |   55 | 125 | `&#85;`  | U   | 1010101 |                          |
|  86 |   56 | 126 | `&#86;`  | V   | 1010110 |                          |
|  87 |   57 | 127 | `&#87;`  | W   | 1010111 |                          |
|  88 |   58 | 130 | `&#88;`  | X   | 1011000 |                          |
|  89 |   59 | 131 | `&#89;`  | Y   | 1011001 |                          |
|  90 |   5A | 132 | `&#90;`  | Z   | 1011010 |                          |
|  91 |   5B | 133 | `&#91;`  | [   | 1011011 |                          |
|  92 |   5C | 134 | `&#92;`  | \   | 1011100 |                          |
|  93 |   5D | 135 | `&#93;`  | ]   | 1011101 |                          |
|  94 |   5E | 136 | `&#94;`  | ^   | 1011110 |                          |
|  95 |   5F | 137 | `&#95;`  | _   | 1011111 |                          |
|  96 |   60 | 140 | `&#96;`  | `   | 1100000 |                          |
|  97 |   61 | 141 | `&#97;`  | a   | 1100001 |                          |
|  98 |   62 | 142 | `&#98;`  | b   | 1100010 |                          |
|  99 |   63 | 143 | `&#99;`  | c   | 1100011 |                          |
| 100 |   64 | 144 | `&#100;` | d   | 1100100 |                          |
| 101 |   65 | 145 | `&#101;` | e   | 1100101 |                          |
| 102 |   66 | 146 | `&#102;` | f   | 1100110 |                          |
| 103 |   67 | 147 | `&#103;` | g   | 1100111 |                          |
| 104 |   68 | 150 | `&#104;` | h   | 1101000 |                          |
| 105 |   69 | 151 | `&#105;` | i   | 1101001 |                          |
| 106 |   6A | 152 | `&#106;` | j   | 1101010 |                          |
| 107 |   6B | 153 | `&#107;` | k   | 1101011 |                          |
| 108 |   6C | 154 | `&#108;` | l   | 1101100 |                          |
| 109 |   6D | 155 | `&#109;` | m   | 1101101 |                          |
| 110 |   6E | 156 | `&#110;` | n   | 1101110 |                          |
| 111 |   6F | 157 | `&#111;` | o   | 1101111 |                          |
| 112 |   70 | 160 | `&#112;` | p   | 1110000 |                          |
| 113 |   71 | 161 | `&#113;` | q   | 1110001 |                          |
| 114 |   72 | 162 | `&#114;` | r   | 1110010 |                          |
| 115 |   73 | 163 | `&#115;` | s   | 1110011 |                          |
| 116 |   74 | 164 | `&#116;` | t   | 1110100 |                          |
| 117 |   75 | 165 | `&#117;` | u   | 1110101 |                          |
| 118 |   76 | 166 | `&#118;` | v   | 1110110 |                          |
| 119 |   77 | 167 | `&#119;` | w   | 1110111 |                          |
| 120 |   78 | 170 | `&#120;` | x   | 1111000 |                          |
| 121 |   79 | 171 | `&#121;` | y   | 1111001 |                          |
| 122 |   7A | 172 | `&#122;` | z   | 1111010 |                          |
| 123 |   7B | 173 | `&#123;` | {   | 1111011 |                          |
| 124 |   7C | 174 | `&#124;` | \|  | 1111100 |                          |
| 125 |   7D | 175 | `&#125;` | }   | 1111101 |                          |
| 126 |   7E | 176 | `&#126;` | ~   | 1111110 |                          |
| 127 |   7F | 177 | `&#127;` | DEL | 1111111 |                          |
```

### image

The very raw image format is an array of pixels.

A pixel is a picture cell, a raw colored point.

Each pixel is composed by 3 numbers representing the red value, the green value, and the blue value.

It is named RGB (or Digital 8-bit per channel).

It is a 24bits data structure (3 bytes because 3x8bits) :

- represented with integers : `RGB(255, 255, 255)`
- represented with hexadecimals : `#FFFFFF`

It is named true color and allows 16,777,216 color variations. The human eye can discriminate up to 10 millions colors.

## information

An information contained in a data rely on the interpretation context.

For example, the number 20 stored in a data to represent 20 degree. Knowing that the number 20 is for degree (temperature)
is not enough to have the information. Is it Celcius or Fahrenheit ? 20°F equal -6.6°C. This is not the same thing in the
physical reality.

Other example, a transaction amount. 20 euros is not the same value as 20 dollars.

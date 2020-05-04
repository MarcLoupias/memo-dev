(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{355:function(n,s,a){"use strict";a.r(s);var e=a(33),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"data-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-basics"}},[n._v("#")]),n._v(" data - basics")]),n._v(" "),a("h2",{attrs:{id:"difference-between-data-and-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-data-and-information"}},[n._v("#")]),n._v(" difference between data and information")]),n._v(" "),a("p",[n._v("Computers need data. Humans need information.")]),n._v(" "),a("p",[n._v("Data is a building block. Information gives meaning and context.")]),n._v(" "),a("p",[n._v("Example :")]),n._v(" "),a("p",[a("code",[n._v("20180101")]),n._v(" is the raw data. It is a suite of 8 numbers.")]),n._v(" "),a("p",[n._v("Interpreted as a date it is the 1st january 2018.")]),n._v(" "),a("p",[n._v("It could be also a transaction amount of around 20 millions (euros ? dollars ?).")]),n._v(" "),a("p",[n._v("It could be a (bad) password, it could be a lot of things.")]),n._v(" "),a("p",[n._v("To become an information, the data need context.")]),n._v(" "),a("h2",{attrs:{id:"anglicismes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anglicismes"}},[n._v("#")]),n._v(" anglicismes")]),n._v(" "),a("p",[n._v("Beaucoup de confusions terminologiques sont faites en français du fait de mauvaises traductions qui affectent le sens.")]),n._v(" "),a("h3",{attrs:{id:"digital-et-numerique"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#digital-et-numerique"}},[n._v("#")]),n._v(" digital et numérique")]),n._v(" "),a("p",[n._v("Par exemple "),a("em",[n._v("digit")]),n._v(" en anglais signifie "),a("em",[n._v("chiffre")]),n._v(".")]),n._v(" "),a("p",[n._v("Ce qui conduit certaines personnes à parler de "),a("em",[n._v("digital")]),n._v(" au lieu de "),a("em",[n._v("numérique")]),n._v(".")]),n._v(" "),a("p",[n._v("L'informatisation du monde est le processus de transformation de l'information en nombres, il s'agit donc de numérisation\net non de digital. En français digital se rapporte aux doigts.")]),n._v(" "),a("h3",{attrs:{id:"chiffrement-et-cryptage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chiffrement-et-cryptage"}},[n._v("#")]),n._v(" chiffrement et cryptage")]),n._v(" "),a("p",[n._v("Il en va de même pour "),a("em",[n._v("chiffrement")]),n._v(" et "),a("em",[n._v("cryptage")]),n._v(" (anglicisme de "),a("em",[n._v("encryption")]),n._v(").")]),n._v(" "),a("h3",{attrs:{id:"bit-et-octet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bit-et-octet"}},[n._v("#")]),n._v(" bit et octet")]),n._v(" "),a("p",[n._v("En anglais "),a("em",[n._v("bit")]),n._v(" se traduit "),a("em",[n._v("bit")]),n._v(". Pas de différence.")]),n._v(" "),a("p",[n._v("En revanche "),a("em",[n._v("octet")]),n._v(" se traduit "),a("em",[n._v("byte")]),n._v(".")]),n._v(" "),a("p",[n._v("Un octet étant composé de 8 bits, parler de 10 megabits par seconde n'est pas du tout équivalent à 10 megabytes par seconde !")]),n._v(" "),a("h2",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[n._v("#")]),n._v(" data")]),n._v(" "),a("h3",{attrs:{id:"bit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bit"}},[n._v("#")]),n._v(" bit")]),n._v(" "),a("p",[n._v("The smallest piece of data. Short for binary digit (chiffre binaire).")]),n._v(" "),a("p",[n._v("A bit has a single binary value, either "),a("code",[n._v("0")]),n._v(" or "),a("code",[n._v("1")]),n._v(".")]),n._v(" "),a("h3",{attrs:{id:"byte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#byte"}},[n._v("#")]),n._v(" byte")]),n._v(" "),a("p",[n._v("A byte is a unit of data that is eight binary digits long.")]),n._v(" "),a("p",[n._v("Example, the number "),a("code",[n._v("73")]),n._v(" in decimal base is "),a("code",[n._v("01001001")]),n._v(" in binary base.")]),n._v(" "),a("p",[n._v("## data structure")]),n._v(" "),a("p",[n._v("### text")]),n._v(" "),a("p",[n._v("The first data structure for text is the "),a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange",target:"_blank",rel:"noopener noreferrer"}},[n._v("ASCII (American Standard Code for Information Interchange)"),a("OutboundLink")],1)]),n._v(" "),a("p",[n._v("128 characters available (0 to 127) expressed in a table :")]),n._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("| Dec | Hexa | Oct | Html     | chr | binary  | description              |\n| --- | ---- | --- | -------- | --- | ------- | ------------------------ |\n|   0 |    0 |   0 |          | NUL | 0000000 | (null)                   |\n|   1 |    1 | 001 |          | SOH | 0000001 | (start of heading)       |\n|   2 |    2 | 002 |          | STX | 0000010 | (start of text)          |\n|   3 |    3 | 003 |          | ETX | 0000011 | (end of text)            |\n|   4 |    4 | 004 |          | EOT | 0000100 | (end of transmission)    |\n|   5 |    5 | 005 |          | ENQ | 0000101 | (enquiry)                |\n|   6 |    6 | 006 |          | ACK | 0000110 | (acknowledge)            |\n|   7 |    7 | 007 |          | BEL | 0000111 | (bell)                   |\n|   8 |    8 | 010 |          | BS  | 0001000 | (backspace)              |\n|   9 |    9 | 011 |          | TAB | 0001001 | (horizontal tab)         |\n|  10 |    A | 012 |          | LF  | 0001010 | (NL line feed, new line) |\n|  11 |    B | 013 |          | VT  | 0001011 | (vertical tab)           |\n|  12 |    C | 014 |          | FF  | 0001100 | (NP form feed, new page) |\n|  13 |    D | 015 |          | CR  | 0001101 | (carriage return)        |\n|  14 |    E | 016 |          | SO  | 0001110 | (shift out)              |\n|  15 |    F | 017 |          | SI  | 0001111 | (shift in)               |\n|  16 |   10 | 020 |          | DLE | 0010000 | (data link escape)       |\n|  17 |   11 | 021 |          | DC1 | 0010001 | (device control 1)       |\n|  18 |   12 | 022 |          | DC2 | 0010010 | (device control 2)       |\n|  19 |   13 | 023 |          | DC3 | 0010011 | (device control 3)       |\n|  20 |   14 | 024 |          | DC4 | 0010100 | (device control 4)       |\n|  21 |   15 | 025 |          | NAK | 0010101 | (negative acknowledge)   |\n|  22 |   16 | 026 |          | SYN | 0010110 | (synchronous idle)       |\n|  23 |   17 | 027 |          | ETB | 0010111 | (end of trans. block)    |\n|  24 |   18 | 030 |          | CAN | 0011000 | (cancel)                 |\n|  25 |   19 | 031 |          | EM  | 0011001 | (end of medium)          |\n|  26 |   1A | 032 |          | SUB | 0011010 | (substitute)             |\n|  27 |   1B | 033 |          | ESC | 0011011 | (escape)                 |\n|  28 |   1C | 034 |          | FS  | 0011100 | (file separator)         |\n|  29 |   1D | 035 |          | GS  | 0011101 | (group separator)        |\n|  30 |   1E | 036 |          | RS  | 0011110 | (record separator)       |\n|  31 |   1F | 037 |          | US  | 0011111 | (unit separator)         |\n|  32 |   20 | 040 | `&#32;`  | Spc | 0100000 | (space)                  |\n|  33 |   21 | 041 | `&#33;`  | !   | 0100001 |                          |\n|  34 |   22 | 042 | `&#34;`  | \"   | 0100010 |                          |\n|  35 |   23 | 043 | `&#35;`  | #   | 0100011 |                          |\n|  36 |   24 | 044 | `&#36;`  | $   | 0100100 |                          |\n|  37 |   25 | 045 | `&#37;`  | %   | 0100101 |                          |\n|  38 |   26 | 046 | `&#38;`  | &   | 0100110 |                          |\n|  39 |   27 | 047 | `&#39;`  | '   | 0100111 |                          |\n|  40 |   28 | 050 | `&#40;`  | (   | 0101000 |                          |\n|  41 |   29 | 051 | `&#41;`  | )   | 0101001 |                          |\n|  42 |   2A | 052 | `&#42;`  | *   | 0101010 |                          |\n|  43 |   2B | 053 | `&#43;`  | +   | 0101011 |                          |\n|  44 |   2C | 054 | `&#44;`  | ,   | 0101100 |                          |\n|  45 |   2D | 055 | `&#45;`  | -   | 0101101 |                          |\n|  46 |   2E | 056 | `&#46;`  | .   | 0101110 |                          |\n|  47 |   2F | 057 | `&#47;`  | /   | 0101111 |                          |\n|  48 |   30 | 060 | `&#48;`  | 0   | 0110000 |                          |\n|  49 |   31 | 061 | `&#49;`  | 1   | 0110001 |                          |\n|  50 |   32 | 062 | `&#50;`  | 2   | 0110010 |                          |\n|  51 |   33 | 063 | `&#51;`  | 3   | 0110011 |                          |\n|  52 |   34 | 064 | `&#52;`  | 4   | 0110100 |                          |\n|  53 |   35 | 065 | `&#53;`  | 5   | 0110101 |                          |\n|  54 |   36 | 066 | `&#54;`  | 6   | 0110110 |                          |\n|  55 |   37 | 067 | `&#55;`  | 7   | 0110111 |                          |\n|  56 |   38 | 070 | `&#56;`  | 8   | 0111000 |                          |\n|  57 |   39 | 071 | `&#57;`  | 9   | 0111001 |                          |\n|  58 |   3A | 072 | `&#58;`  | :   | 0111010 |                          |\n|  59 |   3B | 073 | `&#59;`  | ;   | 0111011 |                          |\n|  60 |   3C | 074 | `&#60;`  | <   | 0111100 |                          |\n|  61 |   3D | 075 | `&#61;`  | =   | 0111101 |                          |\n|  62 |   3E | 076 | `&#62;`  | >   | 0111110 |                          |\n|  63 |   3F | 077 | `&#63;`  | ?   | 0111111 |                          |\n|  64 |   40 | 100 | `&#64;`  | @   | 1000000 |                          |\n|  65 |   41 | 101 | `&#65;`  | A   | 1000001 |                          |\n|  66 |   42 | 102 | `&#66;`  | B   | 1000010 |                          |\n|  67 |   43 | 103 | `&#67;`  | C   | 1000011 |                          |\n|  68 |   44 | 104 | `&#68;`  | D   | 1000100 |                          |\n|  69 |   45 | 105 | `&#69;`  | E   | 1000101 |                          |\n|  70 |   46 | 106 | `&#70;`  | F   | 1000110 |                          |\n|  71 |   47 | 107 | `&#71;`  | G   | 1000111 |                          |\n|  72 |   48 | 110 | `&#72;`  | H   | 1001000 |                          |\n|  73 |   49 | 111 | `&#73;`  | I   | 1001001 |                          |\n|  74 |   4A | 112 | `&#74;`  | J   | 1001010 |                          |\n|  75 |   4B | 113 | `&#75;`  | K   | 1001011 |                          |\n|  76 |   4C | 114 | `&#76;`  | L   | 1001100 |                          |\n|  77 |   4D | 115 | `&#77;`  | M   | 1001101 |                          |\n|  78 |   4E | 116 | `&#78;`  | N   | 1001110 |                          |\n|  79 |   4F | 117 | `&#79;`  | O   | 1001111 |                          |\n|  80 |   50 | 120 | `&#80;`  | P   | 1010000 |                          |\n|  81 |   51 | 121 | `&#81;`  | Q   | 1010001 |                          |\n|  82 |   52 | 122 | `&#82;`  | R   | 1010010 |                          |\n|  83 |   53 | 123 | `&#83;`  | S   | 1010011 |                          |\n|  84 |   54 | 124 | `&#84;`  | T   | 1010100 |                          |\n|  85 |   55 | 125 | `&#85;`  | U   | 1010101 |                          |\n|  86 |   56 | 126 | `&#86;`  | V   | 1010110 |                          |\n|  87 |   57 | 127 | `&#87;`  | W   | 1010111 |                          |\n|  88 |   58 | 130 | `&#88;`  | X   | 1011000 |                          |\n|  89 |   59 | 131 | `&#89;`  | Y   | 1011001 |                          |\n|  90 |   5A | 132 | `&#90;`  | Z   | 1011010 |                          |\n|  91 |   5B | 133 | `&#91;`  | [   | 1011011 |                          |\n|  92 |   5C | 134 | `&#92;`  | \\   | 1011100 |                          |\n|  93 |   5D | 135 | `&#93;`  | ]   | 1011101 |                          |\n|  94 |   5E | 136 | `&#94;`  | ^   | 1011110 |                          |\n|  95 |   5F | 137 | `&#95;`  | _   | 1011111 |                          |\n|  96 |   60 | 140 | `&#96;`  | `   | 1100000 |                          |\n|  97 |   61 | 141 | `&#97;`  | a   | 1100001 |                          |\n|  98 |   62 | 142 | `&#98;`  | b   | 1100010 |                          |\n|  99 |   63 | 143 | `&#99;`  | c   | 1100011 |                          |\n| 100 |   64 | 144 | `&#100;` | d   | 1100100 |                          |\n| 101 |   65 | 145 | `&#101;` | e   | 1100101 |                          |\n| 102 |   66 | 146 | `&#102;` | f   | 1100110 |                          |\n| 103 |   67 | 147 | `&#103;` | g   | 1100111 |                          |\n| 104 |   68 | 150 | `&#104;` | h   | 1101000 |                          |\n| 105 |   69 | 151 | `&#105;` | i   | 1101001 |                          |\n| 106 |   6A | 152 | `&#106;` | j   | 1101010 |                          |\n| 107 |   6B | 153 | `&#107;` | k   | 1101011 |                          |\n| 108 |   6C | 154 | `&#108;` | l   | 1101100 |                          |\n| 109 |   6D | 155 | `&#109;` | m   | 1101101 |                          |\n| 110 |   6E | 156 | `&#110;` | n   | 1101110 |                          |\n| 111 |   6F | 157 | `&#111;` | o   | 1101111 |                          |\n| 112 |   70 | 160 | `&#112;` | p   | 1110000 |                          |\n| 113 |   71 | 161 | `&#113;` | q   | 1110001 |                          |\n| 114 |   72 | 162 | `&#114;` | r   | 1110010 |                          |\n| 115 |   73 | 163 | `&#115;` | s   | 1110011 |                          |\n| 116 |   74 | 164 | `&#116;` | t   | 1110100 |                          |\n| 117 |   75 | 165 | `&#117;` | u   | 1110101 |                          |\n| 118 |   76 | 166 | `&#118;` | v   | 1110110 |                          |\n| 119 |   77 | 167 | `&#119;` | w   | 1110111 |                          |\n| 120 |   78 | 170 | `&#120;` | x   | 1111000 |                          |\n| 121 |   79 | 171 | `&#121;` | y   | 1111001 |                          |\n| 122 |   7A | 172 | `&#122;` | z   | 1111010 |                          |\n| 123 |   7B | 173 | `&#123;` | {   | 1111011 |                          |\n| 124 |   7C | 174 | `&#124;` | \\|  | 1111100 |                          |\n| 125 |   7D | 175 | `&#125;` | }   | 1111101 |                          |\n| 126 |   7E | 176 | `&#126;` | ~   | 1111110 |                          |\n| 127 |   7F | 177 | `&#127;` | DEL | 1111111 |                          |\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br"),a("span",{staticClass:"line-number"},[n._v("124")]),a("br"),a("span",{staticClass:"line-number"},[n._v("125")]),a("br"),a("span",{staticClass:"line-number"},[n._v("126")]),a("br"),a("span",{staticClass:"line-number"},[n._v("127")]),a("br"),a("span",{staticClass:"line-number"},[n._v("128")]),a("br"),a("span",{staticClass:"line-number"},[n._v("129")]),a("br"),a("span",{staticClass:"line-number"},[n._v("130")]),a("br")])]),a("h3",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[n._v("#")]),n._v(" image")]),n._v(" "),a("p",[n._v("The very raw image format is an array of pixels.")]),n._v(" "),a("p",[n._v("A pixel is a picture cell, a raw colored point.")]),n._v(" "),a("p",[n._v("Each pixel is composed by 3 numbers representing the red value, the green value, and the blue value.")]),n._v(" "),a("p",[n._v("It is named RGB (or Digital 8-bit per channel).")]),n._v(" "),a("p",[n._v("It is a 24bits data structure (3 bytes because 3x8bits) :")]),n._v(" "),a("ul",[a("li",[n._v("represented with integers : "),a("code",[n._v("RGB(255, 255, 255)")])]),n._v(" "),a("li",[n._v("represented with hexadecimals : "),a("code",[n._v("#FFFFFF")])])]),n._v(" "),a("p",[n._v("It is named true color and allows 16,777,216 color variations. The human eye can discriminate up to 10 millions colors.")]),n._v(" "),a("h2",{attrs:{id:"information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#information"}},[n._v("#")]),n._v(" information")]),n._v(" "),a("p",[n._v("An information contained in a data rely on the interpretation context.")]),n._v(" "),a("p",[n._v("For example, the number 20 stored in a data to represent 20 degree. Knowing that the number 20 is for degree (temperature)\nis not enough to have the information. Is it Celcius or Fahrenheit ? 20°F equal -6.6°C. This is not the same thing in the\nphysical reality.")]),n._v(" "),a("p",[n._v("Other example, a transaction amount. 20 euros is not the same value as 20 dollars.")])])}),[],!1,null,null,null);s.default=t.exports}}]);
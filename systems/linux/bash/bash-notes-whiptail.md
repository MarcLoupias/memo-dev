# whiptail

- [manpage whiptail] (http://www.linuxcertif.com/man/1/whiptail/)

## howto
- [en.wikibooks.org : whiptail] (http://en.wikibooks.org/wiki/Bash_Shell_Scripting/Whiptail)
- [How-to-use-whiptail-to-write-interactive-shell-scripts] (http://japan.elecgeek.com/How-to-use-whiptail-to-write-interactive-shell-scripts/)
- [netkiller.github.com : whiptail] (http://netkiller.github.com/linux/shell/whiptail.html)

## whiptail or dialog ?
- [whiptail-or-dialog] (http://unix.stackexchange.com/questions/64627/whiptail-or-dialog)

## examples

### checklist

```bash

#! /bin/bash 

whiptail --title "Check list example" --checklist \
"Choose user's permissions" 20 80 10 \
"NET_OUTBOUND" "Allow connections to other hosts" ON \
"NET_INBOUND" "Allow connections from other hosts" OFF \
"LOCAL_MOUNT" "Allow mounting of local devices" OFF \
"REMOTE_MOUNT" "Allow mounting of remote devices" OFF

```

### gauge

```bash

#! /bin/bash 

{
    for ((i = 0 ; i <= 100 ; i+=30)); do
        sleep 1
        echo $i
    done
} | whiptail --gauge "Please wait" 5 50 0	

whiptail --title "Example Dialog" --msgbox "Traitement terminé." 10 60

```

### infobox

```bash

#! /bin/bash 

whiptail --title "Example Dialog" --msgbox "This is an example of a message box. You must hit OK to continue." 10 60

```

### inputbox

```bash

#! /bin/bash 

result=$(tempfile) ; chmod go-rw $result
whiptail --inputbox "Enter some text" 10 30 2>$result
echo Result=$(cat $result)
rm $result

COLOR=$(whiptail --inputbox "What is your favorite Color?" 8 78 --title "Example Dialog" 3>&1 1>&2 2>&3)
 
exitstatus=$?
if [ $exitstatus = 0 ]; then
    echo "User selected Ok and entered " $COLOR
else
    echo "User selected Cancel."
fi
 
echo "(Exit status was $exitstatus)"		

```

### menu

```bash

#! /bin/bash 

whiptail --title "Menu example" --menu "Choose an option" 22 80 10 \
"<-- Back" "Return to the main menu." \
"Add User" "Add a user to the system." \
"Modify User" "Modify an existing user." \
"List Users" "List all users on the system." \
"Add Group" "Add a user group to the system." \
"Modify Group" "Modify a group and its list of members." \
"List Groups" "List all groups on the system."

```

### passwordbox

```bash

#! /bin/bash 

whiptail --title "Example Dialog" --passwordbox "This is an example of a password box. You must hit OK to continue." 8 78

```

### radiolist

```bash

#! /bin/bash 

whiptail --title "Check list example" --radiolist \
"Choose user's permissions" 20 78 10 \
"NET_OUTBOUND" "Allow connections to other hosts" ON \
"NET_INBOUND" "Allow connections from other hosts" OFF \
"LOCAL_MOUNT" "Allow mounting of local devices" OFF \
"REMOTE_MOUNT" "Allow mounting of remote devices" OFF

```

### textbox

```bash

#! /bin/bash 

whiptail --title "Example Dialog" --textbox /etc/passwd 20 60
whiptail --title "Example Dialog" --textbox /etc/passwd 20 60 --scrolltext

```

### yesno

```bash

#! /bin/bash 

whiptail --title "Example Dialog" --yesno "This is an example of a yes/no box." 8 78
 
exitstatus=$?
if [ $exitstatus = 0 ]; then
    echo "User selected Yes."
else
    echo "User selected No."
fi
 
echo "(Exit status was $exitstatus)"

```

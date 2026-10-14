ORG 0000H

START:
    MOV P1, #0FFH
    MOV P2, #00H

CHECK:
    MOV A, P1
    ANL A, #0FH
    ANL A, #0FH
    MOV R0, A

    MOV A, #0FH
    CLR C
    SUBB A, R0

    ANL A, #0FH
    MOV P2, A

    SJMP CHECK

END

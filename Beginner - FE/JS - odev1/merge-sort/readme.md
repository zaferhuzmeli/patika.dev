[16,21,11,8,12,22] -> Merge Sort

- Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

  - -> Merge Sort

    - [16,21,11] [8,12,22]

    - [16] [21,11] [8,12] [22]

    - [16] [21] [11] [8] [12] [22]

    - [16] [11,21] [8,12] [22]

    - [11,16,21] [8,12,22]

    - [8,11,12,16,21,22]

- Big-O gösterimini yazınız.

  - [8,12] [22] ---
    | n
    - [8,12,22] --

  Merge Sort 2^x = n --> log(n)

  Merge Sort: O(n log n)

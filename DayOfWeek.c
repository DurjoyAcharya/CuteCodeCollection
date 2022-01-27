// Details- https://www.quora.com/How-does-Tomohiko-Sakamotos-Algorithm-work/answer/Raziman-T-V?srid=u2HNX
#include<stdio.h>
main()
{
    printf("%d ",dow(2022,01,26));
}
int dow(int y, int m, int d) {
    return ((y-=m<3)+y/4-y/100+y/400+" bed=pen+mad."[m]+d)%7;
}

package com.example.administrator.debugtest;

import org.junit.Test;

import java.security.Key;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {
    @Test
    public void addition_isCorrect() throws Exception {
//        assertEquals(4, 2 + 2);
        int[] A = new int[19];
        int[] B = new int[13];
        int[] C = new int[7];
        sortedSquares(A, B, C);
    }

    public int sortedSquares(int[] A, int[] B, int[] C) {
        while (A.length == B.length && C.length == 0) {

        }
        return 0;
    }
}
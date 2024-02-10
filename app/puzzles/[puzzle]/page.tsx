"use client"
// @ts-ignore
import * as headbreaker from 'headbreaker';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import puzzles from '../puzzles';

const EASYMODE = ['true', 'y', 'yes'].includes(process.env.NEXT_PUBLIC_EASYMODE!.toLowerCase());

export default function Puzzle({ params }: { params: { puzzle: string } }) {
    const containerRef = useRef<any>(null)
    const [img, setImg] = useState<HTMLImageElement | null>(null)
    const [solved, setSolved] = useState(EASYMODE);

    // Load image
    useEffect(() => {
        const image = new Image();
        image.src = puzzles[+params.puzzle - 1].imageSrc;
        image.onload = () => {
            setImg(image);
        }
    }, [])

    // Render puzzle canvas
    useEffect(() => {
        if (img === null || containerRef.current === null) return;
        const containerWidth = containerRef.current.offsetWidth;
        const hCount = puzzles[+params.puzzle - 1].piecesCount;
        const vCount = puzzles[+params.puzzle - 1].piecesCount;
        const width = containerWidth;
        const height = window.innerHeight - 150;
        const pieceSize = {
            x: containerWidth / hCount * 0.82,
            y: img.height / img.width * containerWidth / hCount * 0.82,
        };
        const borderFill = {
            x: pieceSize.x / 10,
            y: pieceSize.y / 10,
        };
        // @ts-ignore
        const canvas = new headbreaker.Canvas('puzzle', {
            width: width,
            height: height,
            pieceSize: pieceSize,
            proximity: Math.sqrt(pieceSize.x * pieceSize.y) / 14,
            borderFill: borderFill,
            strokeWidth: 2,
            strokeColor: 'rgba(0, 0, 0, 0.3)',
            lineSoftness: 0.3,
            painter: new headbreaker.painters.Konva(),
            image: img,
            preventOffstageDrag: true,
        });

        canvas.adjustImagesToPuzzleHeight();
        canvas.autogenerate({
            horizontalPiecesCount: hCount,
            verticalPiecesCount: vCount,
        });
        if (!EASYMODE) {
            canvas.shuffle();
        }
        canvas.draw();
        canvas.attachSolvedValidator();
        canvas.onValid(() => {
            setSolved(true);
        });
    }, [img])

    const nextPuzzleHref = +params.puzzle < puzzles.length ? `/puzzles/${+params.puzzle + 1}` : '/congratulations'
    const nextPuzzleText = +params.puzzle < puzzles.length ? 'Следующий пазл' : 'Сюрприз'

    return (
        <div className="bg-white p-2 shadow-xl rounded-xl container m-auto max-w-screen-md">
        <p className="text-center mt-2">Пазл {params.puzzle}/{puzzles.length}</p>
            <div className="border border-pink-500 mt-4" ref={containerRef} id="puzzle"></div>
            <div className="flex items-center justify-center mt-4 mb-2">
                {
                    solved
                    ? <Link href={nextPuzzleHref} className="focus:outline-none text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5">{nextPuzzleText}</Link>
                    : <Link href={nextPuzzleHref} aria-disabled tabIndex={-1} className="pointer-events-none focus:outline-none text-white bg-pink-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5">{nextPuzzleText}</Link>
                }
            </div>
        </div>
    )
}

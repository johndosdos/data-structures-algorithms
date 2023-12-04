"use strict";
//original solution
class MazeSolver {
    wall;
    start;
    end;
    current;
    maze;
    dir;
    path;
    constructor(maze) {
        this.maze = maze;
        this.wall = "x";
        this.dir = [
            [0, -1], //up
            [1, 0], //right
            [0, 1], //down
            [-1, 0], //left
        ];
        const start_y = maze.findIndex((value) => value.includes("s"));
        const start_x = maze[start_y].indexOf("s");
        this.start = {
            x: start_x,
            y: start_y,
        };
        const end_y = maze.findIndex((value) => value.includes("e"));
        const end_x = maze[end_y].indexOf("e");
        this.end = {
            x: end_x,
            y: end_y,
        };
        this.current = { ...this.start, seen: false };
        this.path = [];
    }
    solve() {
        this.current.seen = true;
        //base cases
        //1. if out of bounds
        if (this.current.x < 0 ||
            this.current.x > this.maze[0].length ||
            this.current.y < 0 ||
            this.current.y > this.maze.length) {
            return undefined;
        }
        //2. if wall
        if (this.maze[this.current.y][this.current.x] === this.wall) {
            return undefined;
        }
        //3. if end
        if (this.current.x === this.end.x && this.current.y === this.end.y) {
            this.path?.push(this.current);
            return this.path;
        }
        //4. if seen
        /*         if (
            this.current.seen &&
            this.path?.some(
                (value) =>
                    value.x === this.current.x && value.y === this.current.y
            )
        ) {
            return undefined;
        } */
        //pre-recurse
        const temp_maze_path = { ...this.current };
        this.path?.push(temp_maze_path);
        //recursion
        for (let i = 0; i < this.dir.length; i += 1) {
            this.current = { ...this.path[this.path.length - 1] };
            const [x, y] = this.dir[i];
            const next_point = {
                x: this.current.x + x,
                y: this.current.y + y,
                seen: false,
            };
            if (this.path?.some((value) => value.x === next_point.x && value.y === next_point.y)) {
                continue;
            }
            this.current = { ...next_point };
            const result = this.solve();
            if (result) {
                return result;
            }
            if (this.current.x === this.end.x &&
                this.current.y === this.end.y) {
                break;
            }
        }
        //post-recurse
        this.path?.pop();
        this.current.seen = false;
        return undefined;
    }
}
const maze_raw = [
    "xxxsxxx", //
    "x     x",
    "xexxxxx",
];
const maze = maze_raw.map((value) => value.split(""));
const solve = new MazeSolver(maze);
console.log(solve.solve());
//refactored solutions using chatGPT
/* type Point = {
    x: number;
    y: number;
    seen?: boolean;
};

type Path = Point[];

// Class responsible for handling the maze structure
class Maze {
    public readonly wall: string;
    public readonly start: Point;
    public readonly end: Point;
    public maze: string[][];

    constructor(maze: string[][]) {
        this.maze = maze;
        this.wall = "x";
        this.start = this.findPoint("s");
        this.end = this.findPoint("e");
    }

    // Helper method to find the coordinates of a symbol in the maze
    private findPoint(symbol: string): Point {
        const y = this.maze.findIndex((row) => row.includes(symbol));
        const x = this.maze[y].indexOf(symbol);
        return { x, y };
    }

    // Check if a point is within the bounds of the maze
    public isPointValid(point: Point): boolean {
        return (
            point.x >= 0 &&
            point.x < this.maze[0].length &&
            point.y >= 0 &&
            point.y < this.maze.length
        );
    }

    // Check if a point is a wall
    public isWall(point: Point): boolean {
        return this.maze[point.y][point.x] === this.wall;
    }

    // Check if a point is the end point
    public isEnd(point: Point): boolean {
        return point.x === this.end.x && point.y === this.end.y;
    }
}

// Class responsible for solving the maze
class MazeSolver {
    public current: Point;
    public dir: [number, number][];
    public path: Path;
    private maze: Maze;

    constructor(maze: Maze) {
        this.maze = maze;
        this.dir = [
            [0, -1], // up
            [1, 0], // right
            [0, 1], // down
            [-1, 0], // left
        ];

        this.current = { ...maze.start, seen: false };
        this.path = [];
    }

    // Check if a point has been seen during the solving process
    private isPointSeen(point: Point): boolean | undefined {
        return (
            point.seen &&
            this.path?.some(
                (value) => value.x === point.x && value.y === point.y
            )
        );
    }

    // Recursive function to solve the maze
    solve(): Path | undefined {
        this.current.seen = true;

        if (
            !this.maze.isPointValid(this.current) ||
            this.maze.isWall(this.current)
        ) {
            return undefined;
        }

        if (this.maze.isEnd(this.current)) {
            this.path?.push(this.current);
            return this.path;
        }

        if (this.isPointSeen(this.current)) {
            return undefined;
        }

        const tempMazePath = { ...this.current };
        this.path?.push(tempMazePath);

        for (const [x, y] of this.dir) {
            const nextPoint = {
                x: this.current.x + x,
                y: this.current.y + y,
                seen: false,
            };

            if (this.isPointSeen(nextPoint)) {
                continue;
            }

            this.current = { ...nextPoint };
            const result = this.solve();

            if (result) {
                return result;
            }

            if (this.maze.isEnd(this.current)) {
                break;
            }
        }

        this.path?.pop();
        this.current.seen = false;

        return undefined;
    }
}

const maze_raw: string[] = [
    "xxxsxxx", //
    "x     x",
    "xexxxxx",
];

const maze: string[][] = maze_raw.map((value) => value.split(""));

const mazeInstance = new Maze(maze);
const solver = new MazeSolver(mazeInstance);
console.log(solver.solve()); */

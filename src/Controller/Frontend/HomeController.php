<?php

namespace App\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="frontend_home")
     * @Route("/{route}", name="vue_pages", requirements={"route"="^.+"})
     */
    public function index()
    {
        return $this->render('frontend/home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
